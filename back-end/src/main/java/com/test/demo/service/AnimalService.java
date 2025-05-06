package com.test.demo.service;

import com.test.demo.model.Animal;
import com.test.demo.model.Ong;
import com.test.demo.repository.AnimalRepository;
import com.test.demo.repository.OngRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class AnimalService {

    private final AnimalRepository animalRepository;
    private final OngRepository ongRepository;

    @Autowired
    public AnimalService(AnimalRepository animalRepository, OngRepository ongRepository) {
        this.animalRepository = animalRepository;
        this.ongRepository = ongRepository;
    }

    @Transactional
    public Animal save(Animal animal) {
        if (animal.getOng() != null) {
            if (!ongRepository.existsById(animal.getOng().getId())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ONG não encontrada");
            }
        }
        return animalRepository.save(animal);
    }

    public List<Animal> findAll() {
        return animalRepository.findAll();
    }

    public Animal findById(Long id) {
        return animalRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Animal não encontrado"));
    }

    // Update method to include findByOngId
    public List<Animal> findByOng(Ong ong) {
        return animalRepository.findByOng(ong);
    }

    @Transactional
    public Animal update(Long id, Animal animalDetails) {
        return animalRepository.findById(id)
                .map(animal -> {
                    animal.setNome(animalDetails.getNome());
                    animal.setDataEntrada(animalDetails.getDataEntrada());
                    animal.setIdade(animalDetails.getIdade());
                    animal.setSexo(animalDetails.getSexo());
                    animal.setRaca(animalDetails.getRaca());
                    animal.setCastrado(animalDetails.isCastrado());
                    animal.setDisponivel(animalDetails.isDisponivel());

                    if (animalDetails.getOng() != null) {
                        Long ongId = animalDetails.getOng().getId();
                        Ong ong = ongRepository.findById(ongId)
                                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "ONG não encontrada"));
                        animal.setOng(ong);
                    }

                    return animalRepository.save(animal);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Animal não encontrado"));
    }

    @Transactional
    public void delete(Long id) {
        if (!animalRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Animal não encontrado");
        }
        animalRepository.deleteById(id);
    }

    public List<Animal> getAnimaisByOngId(Long ongId) {
        if (!ongRepository.existsById(ongId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ONG não encontrada");
        }
        return animalRepository.findByOngId(ongId);
    }

    public List<Animal> findDisponiveis() {
        return animalRepository.findByDisponivel(true);
    }

    public List<Animal> findByRaca(String raca) {
        return animalRepository.findByRacaContainingIgnoreCase(raca);
    }

    public List<Animal> findBySexo(Animal.Sexo sexo) {
        return animalRepository.findBySexo(sexo);
    }

    public List<Animal> findByCastrado(boolean castrado) {
        return animalRepository.findByCastrado(castrado);
    }

    public List<Animal> findByIdadeBetween(int idadeMin, int idadeMax) {
        return animalRepository.findByIdadeBetween(idadeMin, idadeMax);
    }
}