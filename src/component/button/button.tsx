import "./button.css"


const Button=({Text,className,onClick,type}:{Text?:string,className:string,onClick?:()=>void,type:"submit" | "reset" | "button" | undefined})=>{
    return <button type={type} className={`${className}`} onClick={onClick}>{Text}</button>
}

export default Button




//varient