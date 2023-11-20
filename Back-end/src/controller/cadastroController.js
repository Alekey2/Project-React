import { listar, salvar, buscarPorID, remover, alterar, inserirImg } from "../repository/cadastroRepository.js";

import multer from 'multer'

import { Router } from "express";
const endpoints = Router();

const upload = multer({ dest: './storage'})

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

endpoints.put('/produtos/:id/capa', upload.single('capa'), async (req, resp) => {
  let id = req.params.id;
  let caminho = req.file.path;

  let r = await inserirImg(id,caminho)
  resp.status(202).send();
})



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
    const id = req.params.id;

    if (!id) {
      resp.status(400).send({
        erro: "O parâmetro 'nome' é obrigatório."
      });
      return;
    }

    const resultado = await buscarPorID(id);

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