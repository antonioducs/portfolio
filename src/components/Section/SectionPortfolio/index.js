import React, { Component, Fragment } from "react";
import "./styles.css";

class SectionPortfolio extends Component {

    state = {
        trabalhos: [
            {
                img: 'https://github.com/antonioducs/proweb/blob/master/img/portifolio/serv1.png?raw=true',
                page: "https://github.com/antonioducs/dctb-utfpr-2019-1-web/tree/master/as34a-n14/t01/antonio-cesar-duarte"            },
            {
                img: 'https://github.com/antonioducs/proweb/blob/master/img/portifolio/serv2.png?raw=true',
                page: 'https://github.com/antonioducs/dctb-utfpr-2019-1-web/tree/master/as34a-n14/ta03'
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