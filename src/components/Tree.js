import CanvasComponent from "./CanvasComponent";
import Node from "./Node";
import "./Tree.css"
import React,{ useEffect,useState,useRef } from "react";
import Line from "./Line";
export default function Tree({ arr }) {
  const baseURL = "https://developer.android.com";
  const root = new Node([baseURL],null);
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i].replace(baseURL, "");
    root.insert(string.split("/").filter(Boolean));
  }
  function onClickLink(node){
    if(node.children.length===0){
        node.getURL("")
    }
  }


  const [lines,setLines] = useState([]);
  useEffect(()=>{
    const nodes = document.getElementsByClassName("node");
    if(nodes.length==0)
      return;
    const newLines = [];
    for(let i=0; i<nodes.length; i++){
       const parentId = nodes[i].dataset.ref;
       const parentElement = document.getElementById(parentId);
       let rectParent = null;
       if(parentElement==undefined) {
        rectParent = nodes[i].getBoundingClientRect()
        
       }
       else{
         rectParent = parentElement.getBoundingClientRect();
       }
       if(rectParent==null) continue;
       const rect = nodes[i].getBoundingClientRect();
       newLines.push(new Line(rectParent, rect));
    }
    setLines(newLines);
  },[arr])

 



  const idRef = useRef(0);

  function getId(){
    idRef.current += 1;
    return "node"+idRef.current;
  }
  function calculateMargin(node){
    const baseMargin = 1;

    return baseMargin* node.parent.children.length*4;
  }

  const renderTree = (node,parentId) => {
    const id = getId();
    return (
      <div key={node.name} className="tree-ul">
        <div className="node-container" >
          <span id={id} data-ref={parentId} 
                className={`ul-name node ${node.children.length!==0 ? "" : "no-children"} ${parentId === "rootid" ? "noparent" : ""}` }  
                onClick={() =>onClickLink(node)} 
                style={{marginLeft:`${calculateMargin(node)}px`, paddingLeft:"30px"}}
                >
                {node.name} 
          </span>
        </div>
        <ul>
            {node.children.map((child) => renderTree(child,id))}
        </ul>
      </div>
    );
  };


  return (
    <div className="tree-div">
        <div>
          {root.children.map((child) => renderTree(child,"rootid"))}
        </div>
     
      <CanvasComponent lines={lines}/>
    </div>
  );
}
