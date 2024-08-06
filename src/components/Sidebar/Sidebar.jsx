/* eslint-disable no-unused-vars */
import React from 'react'
import './Sidebar.css'
import  {assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu'src={assets.menu_icon} alt='menu'/>
            <div className="new-chat">
            <img src={assets.plus_icon} alt='menu'/>
            <p>New Chat</p>
            </div>


        </div>
        <div className="bottom">
        <img src={assets.menu_icon} alt='menu'/>

        </div>

    </div>
  )
}

export default Sidebar