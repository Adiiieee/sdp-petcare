import React from 'react'
import { useState,useEffect} from 'react'
import './Signup.scss';
import image2 from '../../Assets/image1.svg';
import Axios from 'axios';
function Signup() {
    //equivalent to document.ready
    useEffect(()=>{
        if(localStorage.getItem("email") != null){
            window.location.href="/dashboard"
        }
        
    },[])
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repeatPassword,setRepeatPassword] = useState('');
    const [error,setError]  = useState('');
    const validateForm = () =>{
        if(email.length == 0 || username.length == 0 || password.length == 0 || repeatPassword.length == 0){
            return false;
        }
        return true;
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!validateForm()){
            setError('Please fill out all fields')
            return;
        }
        if(password != repeatPassword){
            setError('Passwords do not match');
            return;
        }
        else{
            Axios.post('http://localhost:4000/app/signup',
            {
                fullName:username,
                email : email,
                password : password,
            }
        ).then((response)=>{
            console.log(response);
            window.location.href = '/login';
        })
        .catch(err=>{
            console.log(err);
        });
        }
    }
  return (
    <div className='signup-container'>
        <div className='signup-left'>
            <img src = {image2} className="signup-image" alt="image"/>
        </div>
        <div className='signup-right'>
            <h2>Sign Up To Cure</h2>
        <form className='signup-form'>
            <input type='email' name='email' required="required" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
            <input type='text' name='username' required="required" placeholder='Full Name' value={username} onChange={e=>setUsername(e.target.value)}/>
            <input id="password" type='password' required="required" placeholder='Password' name='password' value={password} onChange = {e=>setPassword(e.target.value)}/>
            <input type='password' required="required" placeholder='Enter Password' name='password' value={repeatPassword} onChange = {e=>setRepeatPassword(e.target.value)}/>
            <button type='submit' className='submit-btn' onClick={e=>handleSubmit(e)}>Register</button>
            {error && <p className='error-div'>{error}</p>}
        </form>
        </div>
    </div>
  )
}

export default Signup