import React, { Component, Fragment } from "react";
import "./styles.css";

class SectionInfo extends Component {

    state = {
        img: "https://github.com/antonioducs/proweb/blob/master/img/portifolio/git.png?raw=true",
        linkGit: "//github.com/antonioducs",
        biografia: ["Em 2010 iniciei o ensino médio na Escola Estadual José Garcil Leal em Paranaíba-MS. Em 2013, após concluir o ensino médio, ainda na mesma cidade, iniciei o curso de direito. Após certo tempo, notei que a área de tecnologia é a que eu amava e desejava trabalhar, então abondonei o curso de direito e comecei a estudar programação por conta própria. Em 2016 iniciei o curso superior de Engenharia de Computação na Universidade Tecnológica Federal do Paraná (UTFPR) em Cornélio Procópio."],
        profissao: ["Sempre fui atraído pela curiosidade de saber o que tem atrás desse conjunto de pixels estilizados que vemos nas telas dos nossos aparelhos eletrônicos. Quando fiz o primeiro código em uma tela sem nenhum efeito visual, e apesar de ter sido um código simples quase que sem função, foi uma sensação inesquecível. Hoje já posso dizer que conheço todas as camadas por trás dos panos, desde o mais baixo nível utilizando de apenas eletrônica digital até linguaguens do mais alto nível como JavaScript que possibilita a criação de sites, como este mesmo, Python para redes neurais e até mesmo comunicação entre dispositivos para IOT."]
    };

    render() {
        return (
            <Fragment>
                <div id="Info">
                    <h1>Mais Informações</h1>
                    <div className="body">
                        <div className="bio">
                            <h2>Biografia</h2>
                            <p>{this.state.biografia}</p>
                        </div>
                        <div className="work">
                            <h2>Profissão</h2>
                            <p>{this.state.profissao}</p>
                        </div>
                    </div>
                    <div className="image">
                        <a href={this.state.linkGit} target="_blank"><img src={this.state.img} alt="git"></img></a>
                    </div>
                    <p className="git">GitHub</p>
                </div>
            </Fragment>
        );
    }
}

export default SectionInfo;