import React from 'react'
import "./Navbar.css"
import Logo from '../../assets/logo.png'
import Search_Icon from '../../assets/search_icon.svg'
import Bell_Icon from '../../assets/bell_icon.svg'
import Profile_Img from '../../assets/profile_img.png'
import Caret_Icon from '../../assets/caret_icon.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={Logo} alt='logo' className='logo'/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Moves</li>
                <li>News & Popular</li>
                <li>My List</li>
                <li>Browse By Language</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={Search_Icon} alt="search icon" className='icon' />
            <p>Children</p>
            <img src={Bell_Icon} alt="bell icon" className='icon' />
            <div className='navbar-profile'>
                <img src={Profile_Img} alt="profile picture" className='profile' />
                <img src={Caret_Icon} alt="caret icon" />
                <div className='dropdown'>
                <p>Sign Out of NetFlix</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar