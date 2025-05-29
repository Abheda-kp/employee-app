import "./content.css"
const Content=({label,value}:{label:string,value:string|number})=>{
  
    return <div className="box">
        
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    

    </div>
}

export default Content