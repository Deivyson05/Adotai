package com.test.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "avaliacao")
public class Avaliacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private int nota;
    private String comentario;
    private LocalDate dataAvaliacao;
    
    @OneToOne
    @JoinColumn(name = "adocao_id")
    private Adocao adocao;
    
    @ManyToOne
    @JoinColumn(name = "animal_id")
    private Animal animal;
    
    @ManyToOne
    @JoinColumn(name = "adotante_id")
    private Adotante adotante;
    
    @ManyToOne
    @JoinColumn(name = "ong_id")
    private Ong ong;
}