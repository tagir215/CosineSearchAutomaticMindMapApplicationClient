import React, {useEffect,useRef,useState} from "react";
import "./CanvasComponent.css"
import "../App.css"

export default function({lines}){
    const scale =2;
    const canvasRef = useRef(null);    
    const [canvasSize ,setCanvasSize] = useState([0,0]);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const rect = document.getElementsByClassName("tree-div")[0].getBoundingClientRect();
        const width = rect.width;
        const height = rect.height +500;
        canvas.width = width*scale;
        canvas.height = height*scale;
        setCanvasSize([width,height]);

        context.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--line-color');;
        context.lineWidth=1;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for(let i =0; i<lines.length; i++){
            context.beginPath();
            context.moveTo(lines[i].a,lines[i].b);
            context.lineTo(lines[i].c,lines[i].d);
            context.lineTo(lines[i].e,lines[i].d);
            context.stroke();
           
        }

    },[lines])
    return(
        <>
        <canvas className="canvas2" ref={canvasRef} style={{width:`${canvasSize[0]}px`}}></canvas>
        </>
    )
}