package com.test.demo.controller;

import com.test.demo.model.Ong;
import com.test.demo.service.OngService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ongs")
public class OngController {

    private final OngService ongService;

    @Autowired
    public OngController(OngService ongService) {
        this.ongService = ongService;
    }

    @PostMapping
    public ResponseEntity<Ong> create(@RequestBody Ong ong) {
        Ong savedOng = ongService.save(ong);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedOng);
    }

    @GetMapping
    public ResponseEntity<List<Ong>> getAll() {
        List<Ong> ongs = ongService.findAll();
        return ResponseEntity.ok(ongs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ong> getById(@PathVariable Long id) {
        Ong ong = ongService.findById(id);
        return ResponseEntity.ok(ong);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ong> update(@PathVariable Long id, @RequestBody Ong ongDetails) {
        Ong updatedOng = ongService.update(id, ongDetails);
        return ResponseEntity.ok(updatedOng);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        ongService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/cnpj/{cnpj}")
    public ResponseEntity<Ong> getByCnpj(@PathVariable String cnpj) {
        Ong ong = ongService.findByCnpj(cnpj);
        return ResponseEntity.ok(ong);
    }

    @GetMapping("/{id}/quantidade-animais")
    public ResponseEntity<Integer> getQuantidadeAnimais(@PathVariable Long id) {
        int quantidade = ongService.getQuantidadeAnimaisByOngId(id);
        return ResponseEntity.ok(quantidade);
    }

    @GetMapping("/{id}/quantidade-adocoes")
    public ResponseEntity<Integer> getQuantidadeAdocoes(@PathVariable Long id) {
        int quantidade = ongService.getQuantidadeAdocoesByOngId(id);
        return ResponseEntity.ok(quantidade);
    }

    @GetMapping("/top-adocoes")
    public ResponseEntity<List<Ong>> getTopOngsByAdocoes() {
        List<Ong> ongs = ongService.findAllOrderByAdocoesCount();
        return ResponseEntity.ok(ongs);
    }
}