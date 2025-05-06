package com.test.demo.controller;

import com.test.demo.model.Avaliacao;
import com.test.demo.service.AvaliacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService avaliacaoService;

    @PostMapping
    public ResponseEntity<Avaliacao> create(@RequestBody Avaliacao avaliacao) {
        Avaliacao savedAvaliacao = avaliacaoService.save(avaliacao);
        return new ResponseEntity<>(savedAvaliacao, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Avaliacao>> getAll() {
        List<Avaliacao> avaliacoes = avaliacaoService.findAll();
        return ResponseEntity.ok(avaliacoes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Avaliacao> getById(@PathVariable Long id) {
        Avaliacao avaliacao = avaliacaoService.findById(id);
        return ResponseEntity.ok(avaliacao);
    }

    @GetMapping("/animal/{animalId}")
    public ResponseEntity<List<Avaliacao>> getByAnimal(@PathVariable Long animalId) {
        List<Avaliacao> avaliacoes = avaliacaoService.findByAnimal(animalId);
        return ResponseEntity.ok(avaliacoes);
    }

    @GetMapping("/adocao/{adocaoId}")
    public ResponseEntity<Avaliacao> getByAdocao(@PathVariable Long adocaoId) {
        Avaliacao avaliacao = avaliacaoService.findByAdocao(adocaoId);
        return ResponseEntity.ok(avaliacao);
    }
}
