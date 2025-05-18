package com.seuprojeto.service;

import com.seuprojeto.model.Produto;
import java.util.ArrayList;
import java.util.List;

public class ProdutoService {

    public List<Produto> listarProdutos() {
        // Exemplo de lista de produtos
        List<Produto> produtos = new ArrayList<>();
        produtos.add(new Produto(1L, "Produto 1", 29.99));
        produtos.add(new Produto(2L, "Produto 2", 49.99));
        return produtos;
    }
}