import React from 'react'
import coverphoto from '../coverPhoto.jpg'
import  profile from '../profile.png'
import { GoPlus } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Subnavbar from './Subnavbar';



const Coverphto = () => {
  return (
    <div>
      <div className='cover-pht'>
        <img className='cover-img' src={coverphoto} alt='cover image'/>
        <div className='profile-details'>
          <div className='prof-left'>
            <div className='prof-row'>
              <img className='profile-img' src={profile} alt='Profile Photo'/>
              <div>
                <h3>Nadun Sameera Bandara Wickramasinghe</h3>
                <p>780 Friends</p>
                <div className='friends-img'>
                <img src={profile}/>
                <img src={profile}/>
                <img src={profile}/></div>
              </div>
            </div>
          </div>
          <div className='prof-right'>
            <button><i><GoPlus size={20}/></i>Add to story</button>
            <button><i><MdEdit size={20}/></i>Edit Profile</button>
            <button><i><FaChevronDown size={20}/></i></button>
          </div>
        </div>
        <hr/>
        <Subnavbar/>
      </div>
      
     
      </div>
  )
}

export default Coverphto