package com.test.demo.service;

import com.test.demo.model.Adocao;
import com.test.demo.model.Adotante;
import com.test.demo.repository.AdotanteRepository;
import com.test.demo.repository.AdocaoRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdotanteService {
    @Autowired
    private AdotanteRepository adotanteRepository;
    
    @Autowired
    private AdocaoRepository adocaoRepository;

    public Adotante save(Adotante adotante) {
        return adotanteRepository.save(adotante);
    }
    
    public Adotante findById(Long id) {
        return adotanteRepository.findById(id).orElse(null);
    }
    
    public int getQuantidadeAdocoes(Long adotanteId) {
        Adotante adotante = findById(adotanteId);
        return adotante != null ? adotante.getQuantidadeAdocoes() : 0;
    }
    
    public int getQuantidadeAvaliacoes(Long adotanteId) {
        Adotante adotante = findById(adotanteId);
        return adotante != null ? adotante.getQuantidadeAvaliacoes() : 0;
    }

    public List<Adocao> getAdocoesByAdotanteId(Long adotanteId) {
        Adotante adotante = findById(adotanteId);
        return adotante != null ? adocaoRepository.findByAdotante(adotante) : List.of();
    }

    public List<Adotante> findAll() {
        return adotanteRepository.findAll();
    }
    
    public Adotante update(Long id, Adotante adotanteDetails) {
        Adotante existingAdotante = findById(id);
        if (existingAdotante != null) {
            existingAdotante.setNome(adotanteDetails.getNome());
            existingAdotante.setCpf(adotanteDetails.getCpf());
            existingAdotante.setDataNascimento(adotanteDetails.getDataNascimento());
            existingAdotante.setPontuacao(adotanteDetails.getPontuacao());
            existingAdotante.setPreferenciaAnimal(adotanteDetails.getPreferenciaAnimal());
            return adotanteRepository.save(existingAdotante);
        }
        return null;
    }

    public boolean delete(Long id) {
        Adotante adotante = findById(id);
        if (adotante != null) {
            adotanteRepository.delete(adotante);
            return true;
        }

        return false;
    }

    public Adotante findByCpf(String cpf) {
        return adotanteRepository.findByCpf(cpf);
    }

    public Adotante findByEmail(String email) {
        return adotanteRepository.findByEmail(email);
    }
    
}