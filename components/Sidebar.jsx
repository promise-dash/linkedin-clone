import React from 'react';
import { Avatar } from '@mui/material';
import "./Sidebar.css";
import { useSelector } from 'react-redux';


function Sidebar() {
    
  const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);
  const userPhoto = useSelector((state) => state.user.photo);

    const recentItem = (topic) => {
        return(
            <div className="sidebar_recentItem">
                <span className='sidebar_hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQcOY2dPgBG7fd3AU_fvvFKPkADnNl-_NI4xx4XiMHpVutUTLVHZqiyw-DoBRGI3tzD8&usqp=CAU" alt="" />
            <Avatar className='sidebar_avatar' src={userPhoto}/>
            <h3>{userName}</h3>
            <h4>{userEmail}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,543</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className='sidebar_statNumber'>3,124</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('linkedin-clone')}
            {recentItem('software')}
            {recentItem('nextjs')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar