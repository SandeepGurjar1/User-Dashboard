import React from 'react'
import "./navbar.css"
import Notification from "../Component/Icons/notification.png"
import Search from "../Component/Icons/search(1).png"
import Profile from "../Component/Icons/boy.jpg"

export default function Navbar(){

    return(
        <>
        <div className='mainNavbarContainer'>
            <div className='dashboardContainer'>
                <h1 className='dashtext'>Dashboard</h1>
            </div>
            <div className='searchItemsContainer'>
                <img src={`${Search}`} className='searchIcon' alt="" />
                <input className='searchInput' type="search" />
            </div>
            <div className='profileItemsContainer'>
                <img src={`${Notification}`} className='notificationIcon'/>
            <div className='profileItems'>
            <img src={`${Profile}`} alt="" className='profileIcon'/>
            <p className='profiletext'>Sandeep</p>
            </div>
            </div>
        </div>
        </>
    )
}