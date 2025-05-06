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
@Table(name = "animal")
public class Animal {
    public enum Sexo {
        M, F
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    private LocalDate dataEntrada;
    private int idade;
    
    @Enumerated(EnumType.STRING)
    private Sexo sexo;
    
    private String raca;
    private boolean castrado;
    private boolean disponivel;
    
    @ManyToOne
    @JoinColumn(name = "ong_id")
    private Ong ong;
    
    @OneToMany(mappedBy = "animal", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Adocao> adocoes = new ArrayList<>();
    
    @OneToMany(mappedBy = "animal", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Avaliacao> avaliacoes = new ArrayList<>();
    
    public List<Adocao> getAdocoesPorAnimal() {
        return new ArrayList<>(adocoes);
    }
    
    public List<Avaliacao> getAvaliacoesPorAnimal() {
        return new ArrayList<>(avaliacoes);
    }
}