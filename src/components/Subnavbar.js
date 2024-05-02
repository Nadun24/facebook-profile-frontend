import React from 'react'
import { FaSortDown } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

const Subnavbar = () => {
  return (
    <div className='Subnav-bar'>
      <div className='sub-nav-left'>
        <button>Posts</button>
        <button>About</button>
        <button>Friends</button>
        <button>Photos</button>
        <button>Videos</button>
        <button>Check-ins</button>
        <button>More<i><FaSortDown /></i></button>
      </div>
      <div className='more-btn'>
        <button><i><IoIosMore size={20}/></i></button>
      </div>
        
    </div>
  )
}

export default Subnavbar