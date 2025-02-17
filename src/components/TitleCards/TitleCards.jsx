import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import {image_URL,base_URL} from '../../constants/constants'
import {Link} from 'react-router-dom';

function TitleCards({title, url}) {
   const [movies,setMovies]=useState([]) 
    
   const cardRef=useRef();

    const  handleWheel=(event)=>{
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaY;
    }
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDExZjg3OThkMjU5ZWM3MzRjYzRkOGFiMjYwYzllYiIsIm5iZiI6MTczOTE3MTMxNC40NTUwMDAyLCJzdWIiOiI2N2E5YTVmMjA4NmY1NDgzNzYwZjc0YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aHryKXzWWleZaZ9o2gOqs-HT9fmsuaR0dVssIUr6aCw'
        }
      };

    useEffect(()=>{
              
        fetch(`${base_URL}/${url}`, options)
        .then(res => res.json())
        .then(res=>setMovies(res.results))
        .catch(err => console.error(err));
        cardRef.current.addEventListener('wheel',handleWheel)
    },[])


  return (
    
    <div className="title-cards">
        <h2> {title? title:'Popular on Netflix'} </h2>
        <div className='card-list' ref={cardRef}>
            {movies ? movies.map ((movie, index)=>{
                return(
                    <Link  to={`/player/${movie.id}`} className='card' key={index}>
                        <img onClick={()=>movieClickHandler(movie.id)} src={`${image_URL}`+movie.backdrop_path} alt="" />
                        <p>{movie.original_title}</p>
                    </Link>
                )
            }):""}
        </div> 
    </div>
  )
}

export default TitleCards