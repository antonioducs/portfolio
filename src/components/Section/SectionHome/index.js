import React, { Component, Fragment } from "react";
import Button from "../../Button";
import List from "../../List";
import "./styles.css";


class SectionHome extends Component {

    state = {
        curriculo: "https://github.com/antonioducs/proweb/raw/master/curriculo.pdf",
        imgPerfil: "https://github.com/antonioducs/proweb/blob/master/img/portifolio/perfil.jpg?raw=true",
        lists: [
            {
                "title": "Interesses",
                "img": "https://github.com/antonioducs/proweb/blob/master/img/portifolio/interesses.png?raw=true",
                "description": ["Desenvolvimento Web",
                    "Desenvolvimento Mobile",
                    "Inteligência Artificial",
                    "Microcontroladores"]
            },
            {
                "title": "Idiomas",
                "img": "https://github.com/antonioducs/proweb/blob/master/img/portifolio/idiomas.png?raw=true",
                "description": ["Português - Nativo",
                    "Inglês - Básico"]
            },
            {
                "title": "Formação",
                "img": "https://github.com/antonioducs/proweb/blob/master/img/portifolio/formacao.png?raw=true",
                "description": ["UTFPR - Engenharia de Computação - Cursando",
                    "2013 - Ensino Médio"]
            },
            {
                "title": "Atividades",
                "img": "https://github.com/antonioducs/proweb/blob/master/img/portifolio/atividades.png?raw=true",
                "description": ["Desenvolvimento Web",
                    "Desenvolvimento Mobile",
                    "Desenvolvimento de aplicações em Hardware"]
            }
        ]
    };

    render() {
        return (
            <Fragment>
                <div id="List">
                    <div id="ListDir">
                        <div className="perfilImg">
                            <img src={this.state.imgPerfil} alt="perfil"></img>
                        </div>
                        <h2> Olá, sou
                        <span className="Nome"> Antonio César Duarte</span>
                            . Estudante de Engenharia de Computação pela UTFPR-CP,
                        nasci em Paranaíba - MS, atualmente moro em Cornélio Procópio - PR.</h2>

                        <a href={this.state.curriculo} target="_blank"><Button>CURRÍCULO COMPLETO</Button></a>
                    </div>
                    <div id="ListEsq">
                        <h1 className="item-1">Antonio Cesar Duarte</h1>
                        {this.state.lists.map(item => {
                            return (
                                <List description={item.description} Imagem={item.img}>{item.title}</List>
                            );
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SectionHome;