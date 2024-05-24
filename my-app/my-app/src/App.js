import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import LOGO2 from './images/LOGO2.png';
import star1 from './images/star_1_DCD1D0.png';
import star2 from './images/star_1_DCD1D0.png';
import chistats_logo from './images/LOGO2.png';


function App() {
  return (
    <div>
      <div className='background-img'></div>

    <div class="bg-text">
        <h2 class="text1">Empowering <span>Financial</span> Insights :</h2>
        <h2 class="text2">Your <span>Trusted </span>Partner</h2>
    </div>

    <div>
        <p class="text3">How can I help You ?</p>
        
        <button id="bubbleButton">
            <Link to="/Main">Let's Get Started</Link>
        </button>

        <div id="bubbleContainer"></div>
    </div>

{/* 
     <div>
        <img class='LOGO2' src={LOGO2}></img>
    </div>  */}


    {/* <div style={{position: 'absolute', top: '90px', left: '80px', fontSize: '30px'}}>
        <span id="logo-name">FIN-TECH-AI</span>
    </div>   */}


    <div class="star" >
        <img src={star1}></img>
    </div>
    

    <div class="star2" >
        <img src={star2}></img>
    </div>

    </div>
  );
}

export default App;