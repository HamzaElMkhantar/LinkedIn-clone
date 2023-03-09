import React, { useEffect, useState } from 'react'
import './Feed.css'
import {Avatar} from '@mui/material'
import monAvatar from './images/monAvatar.jpg'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FeedIcon from '@mui/icons-material/Feed';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUserAuth } from './features/counter/userSlice';


// import {db } from './firebase';

function Feed() {

   const Auth = useSelector(selectUserAuth)

   
    
   const [ posts , setPosts ] = useState([]);
   const [ input , setInput ] = useState('');

   console.log(input);
   console.log("posts : " , posts);

   const sendPost = e => {
    e.preventDefault();
    if(input === ""){return false};
    setPosts([ ...posts , {
        id:posts.length ,
        name:"Hamza El Mkhantar" ,
        photoUrl: monAvatar ,
        description:"description",
        message:input
    }])

    setInput('')
   }

  return (
    <div className='feedComp'>

    <div className='feed'>
        <div>
        <div className='feed-inputConteiner'>

            <Avatar className='monAvatar' src={Auth.photoUrl} />
            <div className='feed-form'>
                <CreateIcon/>
                <form>
                    <input value={input} onChange={(e) => {setInput(e.target.value)}} placeholder='post ...'/>
                    <button onClick={sendPost} name="input" type='submit'>Send</button>
                </form>
            </div>
            
        </div>
        <div className='feed-inputOption'>
            <InputOption Icon={InsertPhotoIcon} title="Photo" color="#378fe9" />
            <InputOption Icon={SmartDisplayIcon} title="Video" color="#5f9a41" />
            <InputOption Icon={EventNoteIcon} title="Event" color="#c37d17" />
            <InputOption Icon={FeedIcon} title="Write Article" color="#e16744" />
        </div>

        </div>
    </div>



     {posts.map( (post) => {
        return(
   
            <Post
                key={post.id}
                name={Auth.name}
                photoUrl={Auth.photoUrl}
                description={post.description}
                message={post.message} />
        )
     })}



    

    {/* <Post 
        name="Hamza el mkhantar" 
        description="description"
        message="Hello this is a test post" /> */}

    </div>
  )
}

export default Feed