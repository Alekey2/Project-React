import React from "react";
import logobranca from "../../assets/images/logo-branca.png";
import caixaDeSom from "../../assets/images/caixaDeSom.png";
import bateria from "../../assets/images/bateria.png";
import violao from "../../assets/images/violao.png";
import saxofone from "../../assets/images/saxofone.png";
import imgDecor from "../../assets/images/imagem-decor.png";
import yamaha from "../../assets/images/yamaha.png";
import fender from "../../assets/images/fender.png";
import gibson from "../../assets/images/gibson.png";
import steinway from "../../assets/images/steinway.png";
import logoSimples from "../../assets/images/logo-simples.png";
import "./index.scss";


export default function Home(){
    return (
        <section className="pagina-home">
            <div className="sec1">
                
                <div>
                    <img src={ logobranca } alt="logo da loja toca raul"/>
                    <h1>Uma loja completa para a música perfeita!</h1>
                    <p>Descubra a loja perfeita para músicos de todos os níveis. Oferecemos uma ampla seleção de instrumentos musicais de alta qualidade, desde guitarras a teclados, para você criar sua música inesquecível.</p>
                    <a href="CadProdutos">
                        <button>Cadastro</button>
                    </a>
                </div>
                
            </div>

            <section className="sec2">
                <h1>Produtos em destaque</h1>
                <div className="produtos">
                    <div>
                        <img src={ caixaDeSom } alt="caixa de som"/>
                        <h1>Caixa Ativa 15" 1400W</h1>
                        <p><strong>R$ 3.403,08</strong></p>
                    </div>
                    <div>
                        <img src={ bateria } alt="bateria eletrônica"/>
                        <h1>Bateria Eletrônica DLX</h1>
                        <p><strong>R$ 6.714,16</strong></p>
                    </div>
                    <div>
                        <img src={ violao } alt="Violão Eletroacústico"/>
                        <h1>Violão Eletroacústico</h1>
                        <p><strong>R$ 918,16</strong></p>
                    </div>
                    <div>
                        <img src={ saxofone } alt="Mini Saxofone Soprano"/>
                        <h1>Mini Saxofone Soprano</h1>
                        <p><strong>R$ 2.243,88</strong></p>
                    </div>
                </div>
            </section>

            <section className="sec3">
                
                <img src={ imgDecor }  className="imagemDecor" alt="Duas imagens decorativas, uma imagem de uma bateria e outra de um homem tocando guitarra"/>
                

                <div>
                    <h1>Marcas de Excelência, Sua Sinfonia!</h1>
                    <p>Explore nossa loja repleta das melhores marcas de instrumentos musicais. Da icônica Fender à elegante Yamaha, oferecemos instrumentos de alta qualidade para você criar música excepcional.</p>
                    <div>
                        <img src={ yamaha } alt="logo yamaha"/>
                        <img src={ fender } alt="logo fender"/>
                        <img src={ gibson } alt="logo gibson"/>
                        <img src={ steinway } alt="logo stainway & sons"/>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <img src={ logoSimples } alt="logo simplificado da loja toca raul"/>
                <a href="as">Quem somos</a>
                <a href="as">Contato</a>
                <a href="asd">Depoimentos</a>
            </footer>
        </section>
        
    )
};