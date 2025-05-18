package com.seuprojeto.controller;

import com.seuprojeto.model.Produto;
import com.seuprojeto.service.ProdutoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProdutoController {

    private final ProdutoService produtoService;

    public ProdutoController() {
        this.produtoService = new ProdutoService();  // Dependência de ProdutoService
    }

    @GetMapping("/produtos")
    public String listarProdutos(Model model) {
        // Usando o ProdutoService para listar produtos
        model.addAttribute("produtos", produtoService.listarProdutos());
        return "produtos";
    }
}