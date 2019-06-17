import React, { Component, Fragment } from "react";
import "./styles.css"

class SectionBlog extends Component {

    state = {
        postagens: [
            {
                title: "NASA",
                img: "https://img.ibxk.com.br///2019/06/12/12212345476179-t1200x480.jpg",
                description: "A NASA anunciou que a missão Psyche, cujo objetivo é explorar o asteroide de mesmo nome, entrou em sua fase final e já existe uma data prevista para o lançamento da sonda que deverá viajar até a rocha espacial. Se tudo correr como o programado, a longa viagem terá início em agosto de 2022 e a pequena espaçonave chegará ao seu destino no fim de janeiro de 2026.",
                source: "https://www.tecmundo.com.br/ciencia/142566-nasa-deve-lancar-missao-explorar-misterioso-asteroide-psyche-2022.htm"
            },
            {
                title: "Microsoft x Linux",
                img: "https://tecnoblog.net/wp-content/uploads/2019/06/linux-windows-10-700x529.jpg",
                description: "A Microsoft anunciou nesta quarta-feira (12) que liberou uma versão de testes do Windows 10 e que vem acompanhada do kernel do Linux, em uma arquitetura chamada WSL 2 (Subsistema do Windows para Linux 2). A versão é a Preview Build 18917 (20H1), promete melhor desempenho e compatibilidade com distribuições do Linux.",
                source: "https://tecnoblog.net/294703/microsoft-libera-kernel-do-linux-embutido-no-windows-10/"
            },
            {
                title: "Raspberry Pi",
                img: "https://s2.glbimg.com/xSAIxSVeJrkCMgT_EkinuY_vMq4=/0x0:4000x2664/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2016/09/27/2_1.jpg",                description: "O Raspberry Pi é um computador de bolso que aparece em diversas versões. Esses modelos podem ser utilizados em uma infinidade de projetos interessantes, que aplicam o hardware da placa em drones, consoles de jogos retrô e dispositivos que deixam sua TV smart. Além disso, também é possível criar um pequeno servidor para liberar acesso dos PCs da rede à impressora ou até uma espécie de armazenamento em nuvem próprio.",
                source: "https://www.techtudo.com.br/listas/2019/06/dez-funcoes-pouco-conhecidas-do-raspberry-pi.ghtml"
            }
        ]
    };

    render() {
        return (
            <Fragment>
                <div id="Blog">
                    <h1>Blog</h1>
                    <div class="post">
                        {this.state.postagens.map(item =>{
                            return(
                                <div className="item">
                                    <h2>{item.title}</h2>
                                    <div className="img-blog">
                                        <img src={item.img} alt="img"></img>
                                    </div>
                                    <p>{item.description}</p>
                                    <h3>Fonte: {item.source}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SectionBlog;