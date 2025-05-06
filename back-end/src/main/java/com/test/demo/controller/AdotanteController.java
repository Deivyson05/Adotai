package com.test.demo.controller;

import com.test.demo.model.Adotante;
import com.test.demo.service.AdotanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/adotantes")
public class AdotanteController {
    
    @Autowired
    private AdotanteService adotanteService;

    @PostMapping
    public ResponseEntity<Adotante> create(@RequestBody Adotante adotante) {
        Adotante savedAdotante = adotanteService.save(adotante);
        return new ResponseEntity<>(savedAdotante, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Adotante>> getAll() {
        List<Adotante> adotantes = adotanteService.findAll();
        return ResponseEntity.ok(adotantes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Adotante> getById(@PathVariable Long id) {
        Adotante adotante = adotanteService.findById(id);
        return adotante != null ? 
               ResponseEntity.ok(adotante) : 
               ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Adotante> update(@PathVariable Long id, @RequestBody Adotante adotanteDetails) {
        Adotante updatedAdotante = adotanteService.update(id, adotanteDetails);
        return updatedAdotante != null ? 
               ResponseEntity.ok(updatedAdotante) : 
               ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean deleted = adotanteService.delete(id);
        return deleted ? 
               ResponseEntity.noContent().build() : 
               ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/quantidade-adocoes")
    public ResponseEntity<Integer> getQuantidadeAdocoes(@PathVariable Long id) {
        int quantidade = adotanteService.getQuantidadeAdocoes(id);
        return ResponseEntity.ok(quantidade);
    }

    @GetMapping("/{id}/quantidade-avaliacoes")
    public ResponseEntity<Integer> getQuantidadeAvaliacoes(@PathVariable Long id) {
        int quantidade = adotanteService.getQuantidadeAvaliacoes(id);
        return ResponseEntity.ok(quantidade);
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<Adotante> getByCpf(@PathVariable String cpf) {
        Adotante adotante = adotanteService.findByCpf(cpf);
        return adotante != null ? 
               ResponseEntity.ok(adotante) : 
               ResponseEntity.notFound().build();
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Adotante> getByEmail(@PathVariable String email) {
        Adotante adotante = adotanteService.findByEmail(email);
        return adotante != null ? 
               ResponseEntity.ok(adotante) : 
               ResponseEntity.notFound().build();
    }
}
