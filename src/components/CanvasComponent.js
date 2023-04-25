import React, {useEffect,useRef} from "react";
import "./CanvasComponent.css"
import "../App.css"

export default function({lines}){
    const canvasRef = useRef(null);    
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        
        context.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');;
        context.lineWidth=1;
        context.lineCap = 'round'; // pyöristä linjan päät
        context.imageSmoothingEnabled = false; // käytä anti-aliasingia
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
        <canvas className="canvas2" ref={canvasRef} width={2000} height={4000}></canvas>
        </>
    )
}