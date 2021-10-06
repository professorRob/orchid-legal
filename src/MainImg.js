import React from 'react'
import lady_justice from './assets/ladyJustice_v1.jpg';
import './MainImg.css';

function MainImg() {
    return (
      <div className="main_img">
        <img src={lady_justice} alt="Justice Is Blind" />
      </div>
    );
}
export default MainImg
