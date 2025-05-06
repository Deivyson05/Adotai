package com.test.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "mensagem")
public class Mensagem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String conteudo;
    private LocalDateTime dataHora;
    private boolean lida;
    
    @ManyToOne
    @JoinColumn(name = "adocao_id")
    private Adocao adocao;
    
    @ManyToOne
    @JoinColumn(name = "remetente_id")
    private Usuario remetente;
    
    public void marcarComoLida() {
        this.lida = true;
    }
}