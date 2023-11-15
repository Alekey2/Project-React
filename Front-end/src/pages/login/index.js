import React from "react";
import logo from "../../assets/images/logo.png";
import "./index.scss";



export default function Login() {
    return (
        <div className="divLogin">
            <a href="/">
            <img src={logo} alt="logo da loja toca raul" />
            </a>

            <section className="caixaLogin">
                <h1>Acesso administração</h1>


                <div className="divInput">
                    <label for="usuario">Usuário:</label>
                    <input type="text" id="usuario" name="usuario" />
                </div>

                <div className="divInput">
                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" />
                </div>

                <div className="divbotao">
                    <a href="cadprodutos">
                        <input className="botao" type="submit" value="Login" />
                    </a>
                </div>


            </section>
        </div>
    )
};