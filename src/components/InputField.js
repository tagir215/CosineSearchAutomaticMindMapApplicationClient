import React, { useState } from 'react';
import './InputField.css'
import Node from "./Node.js"
import Tree from './Tree.js';

export default function InputField(){
    const  [ values ,setValues ] = useState([]);
    const [text,setText] = useState("");
    const baseURL = "http://localhost:8080";
    const handleChange = function(event){
        setText(event.target.value);
    }
    const handleClick = function(event){
        fetch(baseURL +"/search/"+text)
        .then(response => response.text())
        .then(data => {
            const urls = data.split(" ");
            setValues(urls);
        }
    )}
    function buildTree(urls){
        const root = new Node(null,null);
        for(let i=0; i<urls.length; i++){

        }
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) { 
          handleClick();
        }
      };

    return(
        <div>
        <div className="input-field-div">
            <input className="input-field" type="text" onChange={handleChange} onKeyUp={handleKeyPress}/>
            <input type="button" onClick={handleClick} value={"search"} />
        </div>
        <Tree arr={values}/>
        </div>
    )
}