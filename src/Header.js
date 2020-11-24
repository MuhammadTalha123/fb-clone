import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';



function Header() {
    return  <div className="header">
         <div className="header__left">
             <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt='facebook logo'/>
             <div className="header__input">
                 <SearchIcon />
                 <input type="text" />
             </div>
         </div>  
            
         <div className="header__middle">
             <div className="header__option">
                <HomeIcon fontSize="large" />
             </div>
             <div className="header__option">
                <FlagIcon fontSize="large" />
             </div>
             <div className="header__option">
                <SubscriptionsIcon fontSize="large" />
             </div>
             <div className="header__option">
                <StorefrontIcon fontSize="large" />
             </div>
             <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
             </div>
         </div> 

         <div className="header__right"></div>  
         

        </div>;
    
}

export default Header
