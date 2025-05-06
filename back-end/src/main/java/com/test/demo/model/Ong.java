package com.test.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "ong")
public class Ong extends Usuario {
    private String nomeOng;
    private String cnpj;
    private String endereco;
    private String descricao;
    
    @OneToMany(mappedBy = "ong", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Animal> animais = new ArrayList<>();
    
    @OneToMany(mappedBy = "ong", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Adocao> adocoes = new ArrayList<>();
    
    public List<Animal> getAnimaisPorOng() {
        return new ArrayList<>(animais);
    }
    
    public List<Adocao> getAdocoesPorOng() {
        return new ArrayList<>(adocoes);
    }
}