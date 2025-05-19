package com.seuprojeto.controller;

import com.seuprojeto.model.Produto;
import com.seuprojeto.service.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/produto")
@RestController
public class ProdutoController {

    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Produto>> getProdutos() {
        return new ResponseEntity<>(produtoService.findAll(), HttpStatus.OK);
    }

    @PostMapping("create")
    public ResponseEntity<Produto> createProduto(@RequestBody Produto produto) {
        Produto produto1 = produtoService.create(produto);
        return new ResponseEntity<>(produto1, HttpStatus.CREATED);
    }
}