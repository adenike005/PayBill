import React from 'react';
import Hero from '/mobile1.png'; 
import '../Styled/HeroImg.css'
import user  from '/User.png'
import Apple from '/apple.png'
import Google from '/Google.png'

const HeroImg = () => {
  return (
    <div className="heros">
    <div className="hero-mark">
    <h1>
    All bills payment are handled on Paybills
      </h1>
      <h5>
      Receive, send, exchange, and manage multiple currencies in one app. Open a foreign bank account from your phone for free
      </h5>
      <span>Join Now and Simplify Your Life</span>
      <div className="icon-img">
      <img src={Apple} alt=""  className='icons'/>
      <img src={Google} alt=""  className='icons'/>
      </div>
      <img src={user} alt=""  className='icon'/>
    </div>
    <div className="hero-img">
      <img src={Hero} alt="" />
    </div>
    </div>
  );
}

export default HeroImg;
