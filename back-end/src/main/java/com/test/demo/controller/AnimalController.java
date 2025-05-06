package com.test.demo.controller;

import com.test.demo.model.Animal;
import com.test.demo.model.Ong;
import com.test.demo.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animais")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @PostMapping
    public ResponseEntity<Animal> create(@RequestBody Animal animal) {
        Animal savedAnimal = animalService.save(animal);
        return new ResponseEntity<>(savedAnimal, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Animal>> getAll() {
        List<Animal> animais = animalService.findAll();
        return ResponseEntity.ok(animais);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Animal> getById(@PathVariable Long id) {
        Animal animal = animalService.findById(id);
        return ResponseEntity.ok(animal);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Animal> update(@PathVariable Long id, @RequestBody Animal animalDetails) {
        Animal updatedAnimal = animalService.update(id, animalDetails);
        return ResponseEntity.ok(updatedAnimal);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        animalService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/disponiveis")
    public ResponseEntity<List<Animal>> getDisponiveis() {
        List<Animal> animais = animalService.findDisponiveis();
        return ResponseEntity.ok(animais);
    }

    @GetMapping("/ong/{ongId}")
    public ResponseEntity<List<Animal>> getByOng(@PathVariable Ong ongId) {
        List<Animal> animais = animalService.findByOng(ongId);
        return ResponseEntity.ok(animais);
    }
}
