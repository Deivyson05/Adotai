package com.test.demo.repository;

import com.test.demo.model.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {
    List<Avaliacao> findByAdotante(Adotante adotante);
    
    // Buscar avaliações por animal
    List<Avaliacao> findByAnimal(Animal animal);
    
    // Buscar avaliações por ONG
    List<Avaliacao> findByOng(Ong ong);
    
    // Buscar avaliações por adocao
    List<Avaliacao> findByAdocao(Adocao adocao);
    
    // Buscar avaliações com nota maior que
    List<Avaliacao> findByNotaGreaterThanEqual(int nota);
    
    // Buscar avaliações por intervalo de datas
    List<Avaliacao> findByDataAvaliacaoBetween(java.time.LocalDate inicio, java.time.LocalDate fim);
}