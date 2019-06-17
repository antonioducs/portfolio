import React, { Component, Fragment } from "react";
import "./styles.css";

class SectionPortfolio extends Component {

    state = {
        trabalhos: [
            {
                img: 'sausauh',
                page: 'elle'
            },
            {
                img: 'lele',
                page: 'lolo'
            }
        ]
    };

    render() {
        return (
            <Fragment>
                <div id="Portfolio">
                    <h1>Portfólio</h1>
                    <div className="body">
                        {this.state.trabalhos.map(item => {
                            return (
                                <div className="image">
                                    <a href={item.page} target="_blank"><img src={item.img} alt="work"></img></a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default SectionPortfolio;