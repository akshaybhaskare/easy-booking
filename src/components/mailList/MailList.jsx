import React from 'react';
import './mailList.css';

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time Save mony!</h1>
        <span className="mailDesc">Sign up and we will send the best deals to you</span>
        <span className="mailDesc"></span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your mail" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList