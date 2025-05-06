package com.test.demo.repository;

import com.test.demo.model.Animal;
import com.test.demo.model.Animal.Sexo;
import com.test.demo.model.Ong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {
    
    List<Animal> findByOng(Ong ong);
    
    List<Animal> findByOngId(Long ongId);
    
    List<Animal> findByDisponivel(boolean disponivel);
    
    List<Animal> findByRacaContainingIgnoreCase(String raca);
    
    List<Animal> findBySexo(Sexo sexo);
    
    List<Animal> findByCastrado(boolean castrado);
    
    List<Animal> findByIdadeBetween(int idadeMin, int idadeMax);
    
    List<Animal> findByNomeContainingIgnoreCase(String nome);
    
    long countByOngId(Long ongId);

    // update method existsById method are inherited from JpaRepository
    // and do not need to be explicitly defined here.
    // The same applies to the deleteById method.
}