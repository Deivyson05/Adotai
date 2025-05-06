package com.test.demo.service;

import com.test.demo.model.Adocao;
import com.test.demo.model.Adotante;
import com.test.demo.model.Mensagem;
import com.test.demo.repository.MensagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MensagemService {

    @Autowired
    private MensagemRepository mensagemRepository;

    public Mensagem save(Mensagem mensagem) {
        return mensagemRepository.save(mensagem);
    }

    public List<Mensagem> findAll() {
        return mensagemRepository.findAll();
    }

    public Mensagem findById(Long id) {
        return mensagemRepository.findById(id).orElse(null);
    }

    public List<Mensagem> findByAdocaoId(Long adocaoId) {
        Adocao adocao = new Adocao();
        adocao.setId(adocaoId);
        return mensagemRepository.findByAdocao(adocao);
    }

    public Mensagem marcarComoLida(Long id) {
        Mensagem mensagem = findById(id);
        if (mensagem != null) {
            mensagem.setLida(true);
            return mensagemRepository.save(mensagem);
        }
        return null;
    }

    public List<Mensagem> findByAdocaoAndNaoLidas(Long adocaoId) {
        Adocao adocao = new Adocao();
        adocao.setId(adocaoId);
        return mensagemRepository.findByAdocaoAndLidaFalse(adocao);
    }

    public List<Mensagem> findByRemetente(Long remetenteId) {
        Adotante remetente = new Adotante(); // Use uma subclasse concreta
        remetente.setId(remetenteId);
        return mensagemRepository.findByRemetente(remetente);
    }

    public List<Mensagem> findByDataHoraBetween(LocalDateTime inicio, LocalDateTime fim) {
        return mensagemRepository.findByDataHoraBetween(inicio, fim);
    }

    public long countNaoLidasByAdocaoId(Long adocaoId) {
        Adocao adocao = new Adocao();
        adocao.setId(adocaoId);
        return mensagemRepository.countByAdocaoAndLidaFalse(adocao);
    }
}