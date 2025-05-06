package com.test.demo.service;

import com.test.demo.model.Ong;
import com.test.demo.repository.OngRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class OngService {

    private final OngRepository ongRepository;

    public OngService(OngRepository ongRepository) {
        this.ongRepository = ongRepository;
    }

    @Transactional
    public Ong save(Ong ong) {
        if (ongRepository.existsByCnpj(ong.getCnpj())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CNPJ já cadastrado");
        }
        return ongRepository.save(ong);
    }

    public List<Ong> findAll() {
        return ongRepository.findAll();
    }

    public Ong findById(Long id) {
        return ongRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ONG não encontrada"));
    }

    @Transactional
    public Ong update(Long id, Ong ongDetails) {
        return ongRepository.findById(id)
                .map(ong -> {
                    ong.setNomeOng(ongDetails.getNomeOng());
                    ong.setEndereco(ongDetails.getEndereco());
                    ong.setDescricao(ongDetails.getDescricao());
                    ong.setTelefone(ongDetails.getTelefone());
                    ong.setEmail(ongDetails.getEmail());
                    return ongRepository.save(ong);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ONG não encontrada"));
    }

    @Transactional
    public void delete(Long id) {
        if (!ongRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ONG não encontrada");
        }
        ongRepository.deleteById(id);
    }

    public Ong findByCnpj(String cnpj) {
        return ongRepository.findByCnpj(cnpj)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ONG não encontrada"));
    }

    public int getQuantidadeAnimaisByOngId(Long ongId) {
        if (!ongRepository.existsById(ongId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ONG não encontrada");
        }
        return ongRepository.countAnimaisByOngId(ongId);
    }

    public int getQuantidadeAdocoesByOngId(Long ongId) {
        if (!ongRepository.existsById(ongId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ONG não encontrada");
        }
        return ongRepository.countAdocoesByOngId(ongId);
    }

    public List<Ong> findAllOrderByAdocoesCount() {
        return ongRepository.findAllOrderByAdocoesCount();
    }
}