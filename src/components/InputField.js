import React, { useState } from 'react';
import './InputField.css'
import Tree from './Tree.js';

export default function InputField(){
    const  [ values ,setValues ] = useState([]);
    const [text,setText] = useState("");
    const [initState, setInitState] = useState("starting...");
    const baseURL = "https://csamma.herokuapp.com";
    const handleChange = function(event){
        setText(event.target.value);
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

    const init = function(){
        fetch(baseURL + "/init")
        .then(response => response.text())
        .then(data =>{
            setInitState(data);
        })
    }
    init();
    return(
        <div>
        <div className="input-field-div">
            <input className="input-field" type="text" onChange={handleChange} onKeyUp={handleKeyPress}/>
            <input type="button" onClick={handleClick} value={"search"} />
        </div>
        <span>{initState}</span>
        <Tree arr={values}/>
        </div>
    )
}