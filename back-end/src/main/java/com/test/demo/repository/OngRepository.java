package com.test.demo.repository;

import com.test.demo.model.Ong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long> {

    // update method findById method are inherited from JpaRepository
    // implements:
    Optional<Ong> findById(Long id);
    
    Optional<Ong> findByCnpj(String cnpj);
    
    boolean existsByCnpj(String cnpj);
    
    List<Ong> findByNomeOng(String nome);
    
    List<Ong> findByEndereco(String endereco);
    
    @Query("SELECT COUNT(a) FROM Animal a WHERE a.ong.id = :ongId")
    int countAnimaisByOngId(Long ongId);
    
    @Query("SELECT COUNT(a) FROM Adocao a WHERE a.ong.id = :ongId")
    int countAdocoesByOngId(Long ongId);
    
    @Query("SELECT o FROM Ong o LEFT JOIN o.adocoes a GROUP BY o ORDER BY COUNT(a) DESC")
    List<Ong> findAllOrderByAdocoesCount();
}