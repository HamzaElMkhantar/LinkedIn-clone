import React from 'react'
import './HeaderOption.css'
import {Avatar} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUserAuth } from './features/counter/userSlice'

function HeaderOption({Icon , title , avatar}) {

    const Auth = useSelector(selectUserAuth)

  return (
    <div className='headerOption' >
        <div>{ Icon &&
        <Icon className="icon" />}
        {avatar && <Avatar className="avatar"  src={avatar}> {Auth.name[0]} </Avatar>}
        </div>
        <h4>{title}</h4>
    </div>
  )
}

export default HeaderOption