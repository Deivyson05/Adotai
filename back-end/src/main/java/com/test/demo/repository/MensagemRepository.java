package com.test.demo.repository;

import com.test.demo.model.Mensagem;
import com.test.demo.model.Adocao;
import com.test.demo.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MensagemRepository extends JpaRepository<Mensagem, Long> {
    List<Mensagem> findByAdocao(Adocao adocao);
    
    List<Mensagem> findByAdocaoAndLidaFalse(Adocao adocao);
    
    List<Mensagem> findByRemetente(Usuario remetente);
    
    List<Mensagem> findByDataHoraBetween(java.time.LocalDateTime inicio, java.time.LocalDateTime fim);
    
    long countByAdocaoAndLidaFalse(Adocao adocao);}
