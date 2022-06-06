import React from 'react';
import './Chat.css'
import { FaArrowAltCircleRight } from "react-icons/fa";

const Chat = () => {
    return (
        <div>
          <div className='ct-bar'>
            <div className='d-flex'>
                <h6 className='c-h6'>Sent Massage</h6>
                <input className='c-in' />
                <FaArrowAltCircleRight className='c-i' />
            </div>
          </div>
        </div>
    );
};

export default Chat;