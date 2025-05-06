package com.test.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "adocao")
public class Adocao {
    public enum StatusAdocao {
        EM_ANALISE, APROVADA, REPROVADA, CANCELADA, CONCLUIDA
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    private StatusAdocao statusAdocao;
    
    private LocalDateTime dataSolicitacao;
    private LocalDateTime dataConclusao;
    
    @ManyToOne
    @JoinColumn(name = "animal_id")
    private Animal animal;
    
    @ManyToOne
    @JoinColumn(name = "adotante_id")
    private Adotante adotante;
    
    @ManyToOne
    @JoinColumn(name = "ong_id")
    private Ong ong;
    
    @OneToMany(mappedBy = "adocao", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mensagem> mensagens = new ArrayList<>();
    
    @OneToOne(mappedBy = "adocao", cascade = CascadeType.ALL, orphanRemoval = true)
    private Avaliacao avaliacao;
}