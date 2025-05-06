package com.test.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "adotante")
public class Adotante extends Usuario {
    private String nome;
    
    @Column(unique = true)
    private String cpf;
    
    private LocalDate dataNascimento;
    private int pontuacao;
    private String preferenciaAnimal;
    
    @OneToMany(mappedBy = "adotante", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Adocao> adocoes = new ArrayList<>();
    
    @OneToMany(mappedBy = "adotante", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Avaliacao> avaliacoes = new ArrayList<>();
    
    public int getQuantidadeAdocoes() {
        return adocoes.size();
    }
    
    public int getQuantidadeAvaliacoes() {
        return avaliacoes.size();
    }
}