import { conectar } from "./connection.js";

export async function salvar(produtos) {
    const comando = `
    INSERT INTO cad_produtos (nm_prod, ds_prod, quant_prod, valor_prod,img_prod)
                    VALUES (?, ?, ?, ?, ?)
    `

    const [info] = await conectar.query(comando, [produtos.nome, produtos.descricao, produtos.quantidade, produtos.valor, produtos.imagem])
    produtos.id = info.insertId;

    return produtos;
}

export async function listar() {
    const comando = `
    SELECT  cod_prod      as id,
            nm_prod         as nome,
            ds_prod         as descricao,
            quant_prod      as quantidade,
            valor_prod      as valor,
            img_prod       as imagem
       FROM cad_produtos
    `

    const [linhas] = await conectar.query(comando);
    return linhas;
}

export async function buscarPorNome(nome) {
    const comando = `
    SELECT cod_prod        as id,
           nm_prod        as nome,
           ds_prod      as descricao,
           quant_prod  as quantidade,
           valor_prod   as valor,
           img_prod       as imagem
      FROM cad_produtos
      WHERE nm_prod like ?
 `
  
    const [linhas] = await conectar.query(comando, ['%'+nome+'%']);
    return linhas;
  }

  export async function inserirImg(id, caminho) {
    const comando = `
    UPDATE cad_produtos
    SET img_prod = ?
    WHERE cod_prod = ?
    `
    const [linhas] = await conectar.query(comando, [caminho, id]);
    return linhas.affectedRows;
}

  export async function alterar(id, produto) {
    const comando = `
    UPDATE cad_produtos
    SET nm_prod = ?,
        ds_prod = ?,
        quant_prod = ?,
        valor_prod = ?,
        img_prod = ?
    WHERE cod_prod = ?
    `

    const valores = [produto.nome, produto.descricao, produto.quantidade, produto.valor, produto.img, id];

    const [linhas] = await conectar.query(comando, valores);
    return linhas;
}


  export async function remover(id) {
    const comando = 'DELETE FROM cad_produtos WHERE cod_prod = ?'
  
    const [info] = await conectar.query(comando, [id])
    return info.affectedRows;
  }
  