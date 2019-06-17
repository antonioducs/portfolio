import React, { Component, Fragment } from "react";
import "./styles.css";

class SectionHabilidades extends Component {
    state = {
        habilidades: ["JavaScript", "C/C++", "HTML", "SGBD", "JPA", "JUnity", "Java", 
                    "ReactJs", "NodeJs", "MongoDB", "MySQL", "Sockets", "Microcontroladores", "Arduino",
                "IA", "IoT"]
    };

    render() {
        return (
            <Fragment>
                <div id="skills">
                    <div className="item-1">
                        <h1>Habilidades</h1>
                        <p className="item-3">Segue uma lista de algumas habilidades profissionais.</p>
                    </div>
                    <div className="item-2">
                        {this.state.habilidades.map(item => {
                            return (
                                <p className="item-4">{item}</p>
                            );
                        })}
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default SectionHabilidades;