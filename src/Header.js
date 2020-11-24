import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return  <div className="header">
         <div className="header__left">
             <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt='facebook logo'/>
             <div className="header__input">
                 <SearchIcon />
                 <input type="text" />
             </div>
         </div>  
            
         <div className="header__middle"></div> 

         <div className="header__right"></div>  
         

        </div>;
    
}

export default Header
