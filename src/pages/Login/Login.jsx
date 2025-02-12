import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
function Login() {
  const [signState, setSignState]=useState("Sign In")
  return (
    <div className='login'>
      <div className='login-head'>
        <img className='login-logo' src={Logo}/>
        <div className='login-form'>
          <h1>{signState}</h1>
          <form>
            {signState==="Sign Up" ? <input type="text" placeholder='Enter Your Name' />:<></>}
            
            <input type="email"  placeholder='Enter Email'/>
            <input type="password" placeholder='Enter Password' />
            <button>{signState}</button>
            <div className='form-help'>
              <div className='remember'>
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <p>Need help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState==="Sign In" ? <p>New to Netflix ? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account ? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login