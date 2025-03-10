import { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const navigate=useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth ,(user)=>{
      if(user){
        console.log("user loggedin")
        navigate("/")
      }else{
        console.log("user logged out")
        navigate("/login")
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
      
    </div>
  )
}

export default App
