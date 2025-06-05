import { useNavigate } from "react-router-dom"
import "./navbar.css"
import Button from "../button/button"
const Navbar=()=>{
    const navigate=useNavigate()
    const handleClick=()=>{
          navigate("/employees/list")
    }
      const handleLogout = () => {
        localStorage.setItem("token", "");
        navigate("/login");
      };
    return( 
        <>
     
      <nav className="side-bar">
         <img src="/kv-logo.png"  className="logo-icon"/>   
                <ul>
                  
                   <li onClick={handleClick}> <img src="/icon.svg"></img>Employee List</li>
                </ul>
                <ul>
                    <Button
              type="button"
              Text="Logout"
              className="submit"
              onClick={handleLogout}
            />
                </ul>
            </nav>
        </>
    )
}

export default Navbar
