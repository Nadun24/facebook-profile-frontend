import React from 'react'
import logo from '../download.png';
import { IoIosSearch } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import profilePic from '../profile.png';
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='navleft'>
          {/** Add Facebook logo*/}
          <img className='logo' src={logo} alt='logo'/>
 
          {/* Add Search Icon and Search bar*/}
          <div className='search-box'>
            <i><IoIosSearch size={20}/> </i>
            <input type='text' placeholder='Search'/>
            </div>

          {/* Add home */}
          <ul>
            <li><CiHome  size={20}/></li>
            <li><MdOndemandVideo size={20}/></li>
            <li><i><LiaUserFriendsSolid size={20}/></i></li>
            <li><i><IoGameControllerOutline size={20}/></i></li>
          </ul>
        </div>
        <div className='navright'>
            <div className='icons'>
              <i><CgMenuGridO  size={25}/></i>
              <i><AiFillMessage size={25} /></i>
              <i><IoNotifications size={25} /></i>
            </div>
            <div className='nav-usr-icon online'>
              <img src={profilePic} alt='Profile Photo'/>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
