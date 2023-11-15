import { listar, salvar, buscarPorNome, remover, alterar } from "../repository/cadastroRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/produtos', async (req, resp) => {
  try {
    let produtos = req.body;

    if (!produtos.nome)
      throw new Error('Nome do Produto é obrigatório !');

    if (!produtos.descricao)
      throw new Error('A descrição do produto é obrigatório !');

    if (!produtos.quantidade)
      throw new Error('A quantidade do produto é obrigatório !');

    if (!produtos.valor)
      throw new Error('O valor do produto é obrigatório !');

    let r = await salvar(produtos);

    resp.send(r)

  } catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoints.get('/produtos', async (req, resp) => {
  try {
    let r = await listar(salvar);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoints.get('/produtos/busca', async (req, resp) => {
  try {
    const nome = req.query.nome;

    if (!nome) {
      resp.status(400).send({
        erro: "O parâmetro 'nome' é obrigatório."
      });
      return;
    }

    const resultado = await buscarPorNome(nome);

    resp.send(resultado);
  } catch (err) {
    console.error(err); 
    resp.status(500).send({
      erro: "Ocorreu um erro interno no servidor."
    });
  }
});

endpoints.put('/produtos/:id', async (req, res) => {
  const id = req.params.id;
  const produto = req.body;

  try {
    const linhasAfetadas = await alterar(id, produto);
    if (linhasAfetadas === 0) {
      res.status(404).json({ message: 'Produto não encontrado' });
    } else {
      res.status(200).json({ message: 'Produto atualizado com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o produto' });
  }
});


endpoints.delete('/produtos/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let linhasAfetadas = await remover(id);

    if (linhasAfetadas == 0)
      throw new Error('Produto não encontrado!');

    resp.send();
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

export default endpoints;