import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero_banner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import Info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'>
            <img src={Hero_banner} alt="" className='banner-img' />
            <div className='hero-caption'>
                <img src={Hero_title} alt="" className='caption-img'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officia repellat, unde quae cum rem aliquid natus possimus iusto, pariatur nobis alias illo debitis minus porro suscipit ullam, vitae ducimus!</p>
                <div className='hero-btn'>
                    <button className='btn'> <img src={Play_icon} alt="info icon" />Play</button>
                    <button className='btn btn-dark'><img src={Info_icon} alt="play icon" />  More info</button>
                </div>
            </div>

        </div>
        <TitleCards/>
    </div>
    
  )
}

export default Home