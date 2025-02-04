import React from 'react'
import './Footer.css'
import Youtube_icon from '../../assets/youtube_icon.png'
import Facebook_icon from '../../assets/facebook_icon.png'
import Instagram_icon from '../../assets/instagram_icon.png'
import Twitter_icon from '../../assets/twitter_icon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={Youtube_icon} alt="" />
        <img src={Facebook_icon} alt="" />
        <img src={Instagram_icon} alt="" />
        <img src={Twitter_icon} alt="" />
      </div>
      <ul>
        <li>Audio discription</li>
        <li>help Center</li>
        <li>Gift cards</li>
        <li> Media Center</li>
        <li>Invester Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies preferences</li>
        <li>Corporate Informations</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>c 1997-2024 Netflix,inc</p>
    </div>
  )
}

export default Footer