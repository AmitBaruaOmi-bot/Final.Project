import React from 'react'
import './Login.css'
import { assets } from '../assets/assets'
import { useState } from'react'

const Login = ({setLoginPopUp}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login'>
        <form className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setLoginPopUp(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-input">
                {currState==="Login"?<></>:<input type="text" placeholder='Name' required/>}
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState==="Sign UP"?"Create an account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>I agree to the T&Cs</p>
            </div>
            {currState==="Login"?
            <p>New User? <span onClick={()=>setCurrState("Sign Up")}>Sign Up Here</span></p>
            :<p>Existing User? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}

export default Login
