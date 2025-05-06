package com.test.demo.controller;

import com.test.demo.model.Mensagem;
import com.test.demo.service.MensagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mensagens")
public class MensagemController {

    @Autowired
    private MensagemService mensagemService;

    @PostMapping
    public ResponseEntity<Mensagem> create(@RequestBody Mensagem mensagem) {
        Mensagem savedMensagem = mensagemService.save(mensagem);
        return new ResponseEntity<>(savedMensagem, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Mensagem>> getAll() {
        List<Mensagem> mensagens = mensagemService.findAll();
        return ResponseEntity.ok(mensagens);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mensagem> getById(@PathVariable Long id) {
        Mensagem mensagem = mensagemService.findById(id);
        return ResponseEntity.ok(mensagem);
    }

    @GetMapping("/adocao/{adocaoId}")
    public ResponseEntity<List<Mensagem>> getByAdocao(@PathVariable Long adocaoId) {
        List<Mensagem> mensagens = mensagemService.findByAdocaoId(adocaoId);
        return ResponseEntity.ok(mensagens);
    }

    @PutMapping("/{id}/marcar-lida")
    public ResponseEntity<Mensagem> marcarComoLida(@PathVariable Long id) {
        Mensagem mensagem = mensagemService.marcarComoLida(id);
        return ResponseEntity.ok(mensagem);
    }
}