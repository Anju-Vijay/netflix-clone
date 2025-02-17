import React, { useEffect, useState } from 'react'
import './Player.css'
import Back_Arrow from '../../assets/back_arrow_icon.png'
import {base_URL} from '../../constants/constants'
import { useParams, useNavigate } from 'react-router-dom'
function Player() {
  const[apiVideo,setApiVideo]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""

  })
  const {id}=useParams()
  const navigate=useNavigate()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDExZjg3OThkMjU5ZWM3MzRjYzRkOGFiMjYwYzllYiIsIm5iZiI6MTczOTE3MTMxNC40NTUwMDAyLCJzdWIiOiI2N2E5YTVmMjA4NmY1NDgzNzYwZjc0YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aHryKXzWWleZaZ9o2gOqs-HT9fmsuaR0dVssIUr6aCw'
    }
  };
  
  useEffect(()=>{
    fetch(`${base_URL}/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiVideo(res.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className="player">
      <div className="player-content">
        <img src={Back_Arrow} alt='back button' onClick={()=>{navigate(-2)}}/>
        <iframe width='90%' height='90%' src={`https:www.youtube.com/embed/${apiVideo.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
        <div className="video-details">
          <p>{apiVideo.published_at}</p>
          <p>{apiVideo.name}</p>
          <p>{apiVideo.type}</p>
        </div>
      </div>
    </div>
  )
}

export default Player