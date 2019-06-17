import React, { Component, Fragment } from "react";
import "./styles.css";

class SectionInfo extends Component {

    state = {
        img: "https://github.com/antonioducs/proweb/blob/master/img/portifolio/git.png?raw=true",
        linkGit: "//github.com/antonioducs",
        biografia: [""],
        profissao: ["dasuidafshui duiauiadhads jadsknklnlfadsnja aishdhkfadjldasf dabjfab"]
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

                </div>
            </Fragment>
        );
    }
}

export default SectionInfo;