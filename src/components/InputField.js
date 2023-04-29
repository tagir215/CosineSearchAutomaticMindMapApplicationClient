import React, { useState, useEffect } from 'react';
import './InputField.css'
import Tree from './Tree.js';
import Loader from './Loader';

export default function InputField(){
    const  [ values ,setValues ] = useState([]);
    const [text,setText] = useState("");
    const [initState, setInitState] = useState("starting...");
    const [displayState, setDisplayState] = useState("block");
    const baseURL = "https://csamma.herokuapp.com";
    const baseURLlocal = "http://localhost:8080";
    const handleChange = function(event){
        setText(event.target.value);
    }

  

    const handleClick = function(){
        setDisplayState("block");
        document.getElementsByClassName("input-field")[0].value="";
        fetch(baseURL +"/search/"+text)
        .then(response => response.text())
        .then(data => {
            const urls = data.split(" ");
            setValues(urls);
            setTimeout(()=>{
                setDisplayState("none");
            },500);
        }
    )}

    

  

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) { 
          handleClick();
        }
      };

    const init = function(){
        fetch(baseURL + "/init/")
        .then(response => response.text())
        .then(data =>{
            setInitState(data);
            setTimeout(()=>{
                setDisplayState("none");
            },1000);
        })
    }
    useEffect(()=>{
        init();
    },[])
    return(
        <div>
        <div style={{display:`${displayState}`}}>
        <Loader />
        </div>    
        <div className="input-field-div">
            <input className="input-field" type="text" onChange={handleChange} onKeyUp={handleKeyPress} placeholder='search'/>
            <img className='search-button' src={process.env.PUBLIC_URL+"/search-icon.png"} alt='' onClick={handleClick}></img>
        </div>
        <Tree arr={values}/>
        </div>
    )
}