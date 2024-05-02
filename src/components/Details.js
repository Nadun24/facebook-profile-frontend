import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Details = () => {
  return (
    <div>
        <div class="profile-container">
            < div class="user-info">
              <h1>Intro</h1>
              <button><p>Add bio</p></button>
              <h2><i><FaShoppingBag /></i>Works at No Job Company (pvt) Ltd.</h2>
              <h2><i><FaGraduationCap /></i>Studies at University of Sri Jayewardenepura</h2>
              <h2><i><FaGraduationCap /></i>Went to Nugawela Central College - Kandy</h2>
              <h2><i><FaLocationDot /></i>From Mawathagama, Sri Lanka</h2>
              <button><p>Edit Details</p></button>
              <button><p>Add featured</p></button>
            </div>
         </div>
    </div>
  )
}

export default Details