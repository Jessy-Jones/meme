import React from "react";

export default function Header(){
    return(
        <header className="header--container">
            <div className="header--logo--section">
             <img src="/images/troll.svg" alt="Troll Face" className="logo"/>
             <h3 className="header--text">Meme Generator</h3>
            </div>
            <h5 className="header--text">React Course - Project 3</h5>
        </header>
    )
}