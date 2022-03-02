import React from 'react'
import {useEffect} from 'react';
import './Homepage.scss';
function Homepage() {
    const userEmail = localStorage.getItem("email");
    const handleClick = (e) =>{
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/login";
    }
    useEffect(()=>{
        if(localStorage.getItem("email") == null){
            window.location.href = "/login";
        }
    },[])
  return (
    <div className='dashboard-container'>
        <div className='dashboard-left'>

        </div>
        <div className='dashboard-middle'>
            <div className='dashboard-middle-top'>
                <h2>Appointments will appear here.</h2>
            </div>
            <div className='dashboard-middle-bottom'>
                <h2>Vet Cards will appear here.</h2>
            </div>
        </div>
        <div className='dashboard-right'>

        </div>
    </div>
  )
}

export default Homepage