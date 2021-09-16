import React from "react";
import {Link} from "react-router-dom"


function NavBar(){
    
    function handleClick(e){
        e.preventDefault()
    
    }
    return(
        <nav className="nav">
              
        <Link to="/" >Home</Link>
          
        <li><a href="#" onClick={handleClick} ><span className="fas fa-caret-down" ></span></a>
            <ul>
            </ul>
        </li>
        <li><a href="#" onClick={handleClick} >Learn More</a></li>
        <li><a href="#" onClick={handleClick} >Contact Us</a></li>
      </nav>  
    )
        

    
}

export default NavBar