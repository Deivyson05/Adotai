package com.test.demo.repository;

import com.test.demo.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdocaoRepository extends JpaRepository<Adocao, Long> {
    List<Adocao> findByAdotante(Adotante adotante);
    
    List<Adocao> findByAnimal(Animal animal);
    
    List<Adocao> findByOng(Ong ong);
    
    List<Adocao> findByStatusAdocao(Adocao.StatusAdocao status);
    
    List<Adocao> findByStatusAdocaoAndDataConclusaoIsNotNull(Adocao.StatusAdocao status);
}
