import React from 'react'
import './Sidebar.css'
import {Avatar} from '@mui/material'
import myBackrground from'./images/myBackrground.png'
// import monAvatar from './images/monAvatar.jpg'
import { selectUser, selectUserAuth } from './features/counter/userSlice';
import { useSelector } from 'react-redux'

function Sidebar() {

    const Auth = useSelector(selectUserAuth);
    const user = useSelector(selectUser);
    console.log(Auth.name)

    const recentItem = (topic) => {
        return(
            <div className='sidebar-recentItem'>
                <span className='sidebar-hashtag'>#</span>
                <p className='sidebar0topic'>{topic}</p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
            <img src={myBackrground} alt='background-img'/>
            <Avatar src={Auth.photoUrl} className='sidebar-avatar'> </Avatar>
            <h2>{Auth.name}</h2>
            <h4>{Auth.email}</h4>

            <div className='sidebar-top-stats'>
                <div className='stat'>
                    <h4>Who viewed your profile</h4>
                    <p>1,246</p>
                </div>
                <div className='stat'>
                    <h4>Views of your post</h4>
                    <p>872</p>
                </div>
            </div>

        </div>
        <div className='sidebar-buttom'>
            <h2>Recents</h2>
            <div>
            {recentItem("react js")}
            {recentItem("Programming")}
            {recentItem("Redux")}
            {recentItem("Software Engineer")}
            {recentItem("react js")}
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar