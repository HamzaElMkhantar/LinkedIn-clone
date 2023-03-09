import React, { useEffect, useState } from 'react'
import './Login.css'
import linkedLogo from './images/linkedin-logo.png'
import { useDispatch } from 'react-redux';
import {login , userAuth} from './features/counter/userSlice'

function Login() {

    const dispatch = useDispatch()

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [photoUrl , setPhotoUrl] = useState('');
    
    // const [userAuth , setUserAuth]= useState([{}]);
    
    const register = (e) => {
        e.preventDefault();

        if(name === '' || email === '' || password === ''){
            return alert("Inputs is Empty");
        }else{

            dispatch(userAuth({
                name : name ,
                email : email ,
                password : password ,
                photoUrl : photoUrl 
            }))
     
            dispatch(login());
        }
        
    }

    console.log(userAuth)

    // console.log(name , email , password , photoUrl)

  return (
    <div className='login'>
        <img className='login-logo' src={linkedLogo} />

        <div className='login-form'>
            <form>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    value={name}
                    placeholder='Full Name' />
                <input 
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    type="" 
                    value={photoUrl}
                    placeholder="Photo de profile URL (optional)" />
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    value={email}
                    placeholder='Email' />
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    value={password}
                    placeholder="Password" />

                <button onClick={register} type='submit'>Register</button>
            </form>
        </div>
     
    </div>
  )
}

export default Login