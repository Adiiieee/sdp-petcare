import React from 'react'
import './Navbar.scss';
import {Link} from 'react-router-dom'
function Navbar({user}) {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <h2 className='title'>PetCare</h2>
        </div>
        <div className='navbar-right'>
            {!user&&<><Link to ="/login"><button className='login-btn'>
                Login
            </button></Link>
            <Link to ="/signup"><button className='signup-btn'>
                Signup
            </button></Link></>}
            {user &&<>
            <h2>Hello, {user}</h2>
            <Link to ="/login"><button className='signup-btn' onClick={()=>{localStorage.clear()}}>Log Out</button></Link>
            </>
            }
        </div>
    </div>
  )
}

export default Navbar