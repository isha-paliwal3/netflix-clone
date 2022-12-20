import { ArrowDropDown, NotificationsNone, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import logo from './logo.png'
import userAvtar from '../../Images/Netflix-avatar.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () =>(window.onscroll = null);
    };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src={logo} alt="Netflix" />
            <Link to="/" className="link">
            <span>Home</span>
            </Link>    
            <Link to="/tv shows" className="link">
            <span>TV Shows</span>
            </Link>
            <Link to="/movies" className="link">
            <span>Movies</span>
            </Link>
            <span>New & Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
           <Search className="icon"/>
           <span>Children</span>
           <NotificationsNone className="icon"/>
           <img src={userAvtar} alt="user" />
           <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
