import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import {Avatar, IconButton} from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import { useStateValue } from './StateProvider'
function Header(){
 const [{user},dispatch]= useStateValue();
return(
        <div className="header">
            <div className="header__left">
                
                <img src={require('./images/facebook.png')} alt="logo"/>
                <div className="search__compo">
                        <SearchIcon/>
                        <input type="text"placeholder="Search facebook"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header_option active">
                <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option">
                <FlagIcon fontSize="large"/>
                </div>
                <div className="header_option">
                <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                <StorefrontOutlinedIcon fontSize="large"/>
                </div>  
                  <div className="header_option">
                <SupervisedUserCircleIcon fontSize="large"/>
                </div>               
                </div>
                <div className="header__right">
                <div className="user-info">
                       <Avatar src={user.photoURL}/>
                     <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                        <AddIcon/>
                </IconButton>
                <IconButton>
                        <ForumIcon/>
                </IconButton>
                <IconButton>
                        <ExpandMoreIcon/>
                </IconButton>

        </div>
        </div>




)



}
export default Header