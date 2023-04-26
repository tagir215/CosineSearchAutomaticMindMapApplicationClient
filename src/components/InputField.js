import React, { useState } from 'react';
import './InputField.css'
import Tree from './Tree.js';

export default function InputField(){
    const  [ values ,setValues ] = useState([]);
    const [text,setText] = useState("");
    const [initState , setInitState ] = useState("starting...");
    const baseURL = "https://csamma.herokuapp.com";
    const handleChange = function(event){
        setText(event.target.value);
    }

    const init = function(process){
        fetch(baseURL +"/init/"+process)
        .then(response => response.text())
        .then(data => {
            setInitState(data);
        })
    }

    const handleClick = function(){
        fetch(baseURL +"/search/"+text)
        .then(response => response.text())
        .then(data => {
            const urls = data.split(" ");
            setValues(urls);
        }
    )}

  

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) { 
          handleClick();
        }
      };

    init("initWebPages");

    return(
        <div>
        <div className="input-field-div">
            <input className="input-field" type="text" onChange={handleChange} onKeyUp={handleKeyPress}/>
            <input type="button" onClick={handleClick} value={"search"} />
        </div>
        <h1 style={{color:"black"}}>{initState}</h1>
        <Tree arr={values}/>
        </div>
    )
}