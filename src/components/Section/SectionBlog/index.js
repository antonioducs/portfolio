import React, { Component, Fragment } from "react";
import "./styles.css"

class SectionBlog extends Component {

    state = {
        postagens: [
            {
                title: "husausa",
                img: "url",
                description: "uhhsa",
                source: "link"
            },
            {
                title: "husausa",
                img: "url",
                description: "uhhsa",
                source: "link"
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