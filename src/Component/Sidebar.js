import React from 'react';
import './sidebar.css';
import Home from "../Component/Icons/home.png";
import DailyTask from "../Component/Icons/DailyTask.png";
import Salary from "../Component/Icons/Salary.png";
import Settings from "../Component/Icons/settings(1).png";
import message from "../Component/Icons/message.png";
import MonthlyIncome from "../Component/Icons/monthlyIncome.png";
import Teammembers from "../Component/Icons/Teammembers.png";
import TeamMembers from './TeamMembers';


export default function Sidebar(){

    return(
        
        <div className='mainSidebarContainer'>
            <div>
               
                <ul className='ulContainer'>
                    <h4 className='menu'>Menu</h4>
                    <li className='liContainer'>
                        <img src={`${Home}`} style={{marginLeft:"-5px",marginRight:"-6px",height:"32px",width:"32px"}} className="sidebaricons" alt=""/>
                        <a className="itemNames" href='/'>Home</a>
                    </li>
                    <li className='liContainer'>
                        <img src={`${DailyTask}`} className="sidebaricons" alt=""/>
                        <a className="itemNames" href='#'>Daily Task</a>
                    </li>
                    <li className='liContainer'>
                        <img src={`${Teammembers}`} className="sidebaricons" alt=""/>
                        <a className="itemNames" href="team">Team Members</a>
                    </li>
                    <li className='liContainer'>
                         <img src={`${MonthlyIncome}`} className="sidebaricons" alt=""/>
                        <a className="itemNames" href='#'>Monthly Income</a>
                    </li>
                    <li className='liContainer'>
                        <img src={`${Salary}`} className="sidebaricons" alt=""/>
                        <a className="itemNames" href='salary'>Salaries</a>
                    </li>
                    <li className='liContainer'>
                        <img src={`${Settings}`} className="sidebaricons" alt=""/>
                        <a className="itemNames" href='#'>Settings</a>
                        
                    </li>
                </ul>
            </div>
            <div className='mainScheduleContainer'>
                <h4 className='scheduleText'>Scheduled Events</h4>
                <div className='scheduledContainer'>
                    <input type="radio" value={"Rat Birthday"} />
                    <label htmlFor='Rat Birthday'>Birthday</label>
                </div>
                <div className='scheduledContainer'>
                    <input type="radio" value={"Examination"} />
                    <label htmlFor='Examination'>Examination</label>
                </div>
                <div className='scheduledContainer'>
                    <input type="radio" value={"Gym"} />
                    <label htmlFor='Gym'>Gym</label>
                </div>
            </div>
        </div>
       
    )
}