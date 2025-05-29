import { useNavigate } from "react-router-dom"
import "./navbar.css"
const Navbar=()=>{
    const navigate=useNavigate()
    const handleClick=()=>{
          navigate("/employees/list")
    }
    return( 
        <>
     
      <nav className="side-bar">
         <img src="/kv-logo.png"  className="logo-icon"/>   
                <ul>
                  
                   <li onClick={handleClick}> <img src="/icon.svg"></img>Employee List</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar