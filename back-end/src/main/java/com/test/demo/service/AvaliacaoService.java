package com.test.demo.service;

import com.test.demo.model.*;
import com.test.demo.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    public Avaliacao save(Avaliacao avaliacao) {
        return avaliacaoRepository.save(avaliacao);
    }

    public List<Avaliacao> findAll() {
        return avaliacaoRepository.findAll();
    }

    public Avaliacao findById(Long id) {
        return avaliacaoRepository.findById(id).orElse(null);
    }

    public List<Avaliacao> findByAnimal(Long animalId) {
        Animal animal = new Animal();
        animal.setId(animalId);
        return avaliacaoRepository.findByAnimal(animal);
    }

    public Avaliacao findByAdocao(Long adocaoId) {
        Adocao adocao = new Adocao();
        adocao.setId(adocaoId);
        List<Avaliacao> avaliacoes = avaliacaoRepository.findByAdocao(adocao);
        return avaliacoes.isEmpty() ? null : avaliacoes.get(0);
    }

    public List<Avaliacao> findByAdotante(Long adotanteId) {
        Adotante adotante = new Adotante();
        adotante.setId(adotanteId);
        return avaliacaoRepository.findByAdotante(adotante);
    }

    public List<Avaliacao> findByNotaGreaterThanEqual(int nota) {
        return avaliacaoRepository.findByNotaGreaterThanEqual(nota);
    }

    public List<Avaliacao> findByDataAvaliacaoBetween(java.time.LocalDate inicio, java.time.LocalDate fim) {
        return avaliacaoRepository.findByDataAvaliacaoBetween(inicio, fim);
    }
}