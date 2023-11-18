
import { useState } from 'react';
import axios from 'axios'
import './index.scss';
import Logo from "../../assets/images/logo.png"



export default function CadProdutos() {
    const [codprod, setCodProd] = useState('')
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [listaproduto, setListaProduto] = useState([]);
    const [imagem, setImagem] = useState('');
    const [arquivo, setArquivo] = useState();


    async function ListarProdutos() {
        try {
            let r = await axios.get('http://4.228.66.214:5000/produtos');
            let produtos = r.data;
            setListaProduto(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }


    async function salvarProdutos() {
        try {
            const produtoExistente = listaproduto.find(
                (produto) => produto.nome === nome && produto.descricao === descricao
            );

            if (produtoExistente) {
                alert('Este produto já está cadastrado.');
            } else {
                let body = {
                    nome: nome,
                    descricao: descricao,
                    quantidade: quantidade,
                    valor: valor,
                    imagem: imagem
                }

                let r = await axios.post('http://4.228.66.214:5000/produtos', body);
                let id = r.data.id;
                
                alert('Produto cadastrado. Id ' + id);

                const formData = new FormData();
                formData.append('capa', arquivo);
        
                r = await axios.put(`http://4.228.66.214:5000/produtos/${produtoId}/capa`, formData, {
                    headers: {'Content-Type': 'multipart/form-data'}
                } )

                ListarProdutos();
            }
        } catch (error) {
            alert('Ocorreu um erro ao salvar o produto: ' + error.message);
        }
    }


    async function alterarProduto(produtoId, novosDados) {
        try {
            if (!produtoId) {
                alert('ID do produto não foi fornecido');
                return;
            }
            let r = await axios.put(`http://4.228.66.214:5000/produtos/${produtoId}`, novosDados);

            if (r.status === 200) {
                alert('Cadastro alterado com sucesso.');
            } else {
                alert('Falha ao alterar o cadastro.');
            }
        } catch (error) {
            alert('Ocorreu um erro ao tentar alterar o cadastro:', error);
        }

        const formData = new FormData();
        formData.append('capa', arquivo);

        r = await axios.put(`http://4.228.66.214:5000/produtos/${produtoId}/capa`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        } )

        ListarProdutos();
    }

    async function excluirProduto(produtoId) {
        try {
            const response = await axios.delete(`http://4.228.66.214:5000/produtos/${produtoId}`);

            if (response.status === 200) {
                alert('Produto excluído com sucesso.');
                ListarProdutos();
            } else {
                alert('Falha ao excluir o produto.');
            }
        } catch (error) {
            alert('Ocorreu um erro ao tentar excluir o produto:', error);
        }
    }


    return (

        <section className="container">

            <section className="sec1">
                <a href="/">
                    <img src={Logo} alt="logo da loja toca raul" />
                </a>

                <h1>Cadastro de Produtos</h1>

                <div className="divInput">
                    <label for="nome">Digite o ID para Alterar ou Deletar </label>
                    <input type="number" id="id" name="id" value={codprod} onChange={e => setCodProd(e.target.value)} />

                    <label for="nome">Nome do Produto:</label>
                    <input type="text" id="nome" name="nome" value={nome} onChange={e => setNome(e.target.value)} />

                    <label for="descrição">Descrição do Produto:</label>
                    <input type="text" id="descrição" name="descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />

                    <label for="quantidade">Quantidade:</label>
                    <input type="number" id="quantidade" name="quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} />

                    <label for="valor"> Valor do Produto R$:</label>
                    <input type="text" id="valor" name="valor" value={valor} onChange={e => setValor(e.target.value)} />

                    <label for="imagem">Imagem:</label>
                    <input className="imagem" type="file" name="imagem" value={arquivo} onChange={e => setArquivo(e.target.files[0])}/>
                </div>

                <div className="divbotao">
                    <button onClick={salvarProdutos}> Cadastrar </button>
                    <button onClick={() => alterarProduto(codprod, {
                        nome: nome,
                        descricao: descricao,
                        quantidade: quantidade,
                        valor: valor,
                        imagem: imagem
                    })}> Alterar </button>

                </div>
            </section>


            <section className="sec2">
                <div className="tituloSec2">
                    <h1>Listagem de Produtos</h1>
                </div>

                <div className="cabecalho-sec2">
                    <p>Código</p>
                    <p>Nome</p>
                    <p>Descrição</p>
                    <p>Quantidade</p>
                    <p>Valor R$</p>
                </div>



                <hr />

                <div className="insereProduto">
                    {listaproduto.map(item =>
                        <div className='produto'>
                            <p className="codigo">{item.id}</p>
                            <div className='text-img'>
                            <img src={'http:///4.228.66.214:5000' + item.imagem } />
                            <p className="text1">{item.nome}</p>
                            </div>
                            <p className="descricao">{item.descricao}</p>
                            <p className="quantidade">{item.quantidade}</p>
                            <p className="valor">R$ {item.valor}</p>
                           

                        </div>

                    )}

                </div>

                <div className="botoes">
                    <div className="divbotao">
                        <button onClick={ListarProdutos}>Atualizar</button>
                    </div>

                    <div className="divbotao">
                        <button onClick={() => excluirProduto(codprod)}> Excluir </button>
                    </div>

                </div>
            </section>
        </section>

    );

}
