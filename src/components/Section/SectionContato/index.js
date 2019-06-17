import React, { Component, Fragment } from "react";
import Button from "../../Button"
import "./styles.css";

class SectionContato extends Component {

    state = {
        contato: {
            email: "antonioduarte.cs@gmail.com",
            telefone: "+55 (067) 998 493 707",
            face: "https://www.facebook.com/antonio.cesarduarte.3",
            insta: "https://www.instagram.com/antonioduarte.cs/",
            imgFace: "https://github.com/antonioducs/proweb/blob/master/img/portifolio/facebook.png?raw=true",
            imgInsta: "https://github.com/antonioducs/proweb/blob/master/img/portifolio/instagram.png?raw=true"
        }
    };

    onClick = () => {
        console.log("Alguém clicou!");
    };
    render() {
        return (
            <Fragment>
                <div id="Contato">
                    <h1>Contato</h1>
                    <div className="item">
                        <h2>Entre em contato</h2>
                        <p>Entre em contato pelo formulário, pelo e-mail ou pelo telefone.</p>
                        <p>{this.state.contato.email}</p>
                        <p>{this.state.contato.telefone}</p>
                    </div>

                    <form action="https://formspree.io/antonioduarte.cs@gmail.com" method="POST">
                        <input type="text" id="nome" placeholder="Nome" name="name" />
                        <input type="text" id="email" placeholder="E-mail" name="_replyto" />
                        <input type="text" id="assunto" placeholder="Assunto" name="" name="subject" />
                        <textarea placeholder="Mensagem" name="message"></textarea>
                        <Button onClick={this.onClick} type="submit">Enviar</Button>
                    </form>

                    

                    <div className="redes_sociais">
                        <h3>Redes sociais</h3>
                        <p>Entre em contato comigo por minhas redes sociais.</p>

                        <a href={this.state.contato.insta} target="_blank"><img src={this.state.contato.imgInsta} alt="instagram"></img></a>
                        <a href={this.state.contato.face} target="_blank"><img src={this.state.contato.imgFace} alt="facebook"></img></a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SectionContato;