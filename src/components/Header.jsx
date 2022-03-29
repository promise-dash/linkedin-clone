import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useSelector, useDispatch} from "react-redux";
import { logout } from '../features/userSlice';

function Header() {
  
  const userPhoto = useSelector((state) => state.user.photo);

  const dispatch = useDispatch();

  const signOutOnClick = () =>{
    dispatch(logout());
  }

  return (
    <div className='header'>
        <div className="header_left">
            <img src="linkedin.png" alt="" />
            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notification"/>
            <HeaderOption avatar={userPhoto} title="Me" onClick={signOutOnClick}/>
        </div>
    </div>
  )
}

export default Header;