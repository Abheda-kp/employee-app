import { useEffect, useState } from "react";

function mousePosition(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    function handleMousePosition(event:MouseEvent){
       
            setX(event.clientX);
            setY(event.clientY);
          
        }
    
    useEffect(()=>{
        window.addEventListener("mousemove",handleMousePosition)
        return()=>{
            document.body.removeEventListener("mousemove",handleMousePosition)
        }
    })
    return [x,y]
}
export default mousePosition