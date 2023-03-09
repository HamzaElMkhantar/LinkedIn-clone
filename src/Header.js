import './Header.css';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logoImg from './images/icons8-linkedin-480.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import monAvatar from './images/monAvatar.jpg'
import { useDispatch, useSelector } from 'react-redux';
import {selectUser , selectUserAuth } from './features/counter/userSlice';
import {login , logOut , userAuth} from './features/counter/userSlice'

function Header() {

  const Auth = useSelector(selectUserAuth)
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutFun = () => {
    dispatch(logOut())
  }

  return (
    <div className='header'>

      <div className='header-left'>
        <img src={logoImg} alt="logo" />
        <div className='header-search'>
          <SearchIcon />
          <input placeholder='Search' />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications " />
        
        { user && <HeaderOption  avatar={Auth.photoUrl} title={Auth.name}  />}

      { user && <button className='logout-btn' onClick={() => logoutFun()} >logOut</button>}
      </div>
    </div>
  )
}

export default Header