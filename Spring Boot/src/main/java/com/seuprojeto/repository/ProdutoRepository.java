package com.seuprojeto.repository;

import com.seuprojeto.model.Produto;
import java.util.List;

public class ProdutoRepository {
    public List<Produto> findAll() {
        // Simulação de dados do banco
        return List.of(new Produto(1L, "Produto 1", 29.99), new Produto(2L, "Produto 2", 49.99));
    }
}