import React from "react";

export default function Meme(){
    return(
    <section className="form">
        <div>                 
            <label>Top Text</label>
            <input type="text"/>
       </div>
        <div>
       <label>Bottom Text</label>
       <input type="text"/>
       </div>
       <input type="submit">Get a new meme image</input>
    </section>
    )
}