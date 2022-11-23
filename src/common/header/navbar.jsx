import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

const [MobileMenu, setMobileMenu] = useState(false) 
    return (
        <>
           <header className="header">
              <div className="container d_flex ">
               <div className="categories d_flex">
                 <span className="fa-solid fa-border-all"></span>
                 <h4>Categories <i className="fa fa-chevron-down"></i></h4>
               </div>

               <div className="navlink">
                 <ul className={MobileMenu ? "nav-links-MobileMenu" :
                  "f_flex capitalize"} onClick={()=> setMobileMenu(false)} >
                  <li>
                    <Link to="/">Home</Link> 
                  </li>  
                  <li>
                    <Link to="/pages">pages</Link> 
                  </li>  
                  <li>
                    <Link to="/user">User</Link> 
                  </li> 
                  <li>
                    <Link to="/vendor">vendor acount</Link> 
                  </li>  
                  <li>
                    <Link to="/track">track my order</Link> 
                  </li>  
                  <li>
                    <Link to="/contact">contact</Link> 
                  </li>   
                 </ul>
                <button className="toggle" onClick={() =>setMobileMenu(!MobileMenu)}>
                   {
                    MobileMenu ? <i className="fa fa-times close home-bth "></i> :
                    <i className="fa-solid fa-xmark open "></i>
                   }
                </button>
               </div>

              </div>
           </header>
        </>
    )
}
export default Navbar;