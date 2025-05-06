package com.test.demo.repository;

import com.test.demo.model.Adotante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdotanteRepository extends JpaRepository<Adotante, Long> {
    // Buscar adotante por CPF
    Adotante findByCpf(String cpf);
    
    // Buscar adotante por email
    Adotante findByEmail(String email);
    
}