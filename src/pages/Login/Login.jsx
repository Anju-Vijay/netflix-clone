import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signUp } from '../../firebase/firebase'
function Login() {
  const [signState, setSignState]=useState("Sign In")
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const user_auth=async(e)=>{
    e.preventDefault()
    if(signState==="Sign In"){
      await login(email,password)
    }else{
      await signUp(name,email,password)
    }
  }
  return (
    <div className='login'>
      <div className='login-head'>
        <img className='login-logo' src={Logo}/>
        <div className='login-form'>
          <h1>{signState}</h1>
          <form>
            {signState==="Sign Up" ? 
            <input name='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Your Name' />:<></>}
            <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Enter Email'/>
            <input name='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password' />
            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className='form-help'>
              <div className='remember'>
                <input type="checkbox" id='checkbox'/>
                <label htmlFor="checkbox">Remember me</label>
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