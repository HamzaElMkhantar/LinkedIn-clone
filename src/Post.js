import React from 'react'
import './Post.css'
import {Avatar} from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectUserAuth, userAuth } from './features/counter/userSlice';

import FlipMove from 'react-flip-move';

function Post({name , description , photoUrl , message}) {

    const Auth = useSelector(selectUserAuth)

  return (
      
      <div className='post'>

        <div className='post-header'>
            <Avatar className='post-avatar' src={photoUrl}> {Auth.name[0] } </Avatar>
            <div className='post-info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post-body'>
            <p>{message}</p>
        </div>
        <div className='post-buttons'>
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareIcon} title="Share" color="gray"/>
            <InputOption Icon={SendIcon} title="Send" color="gray"/>
        </div>

    </div>

  )
}

export default Post