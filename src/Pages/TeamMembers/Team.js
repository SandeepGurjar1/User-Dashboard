import React from 'react';
import "./team.css"
import Sidebar from '../../Component/Sidebar';
import TeamMembers from '../../Component/TeamMembers';

function Team() {
  return (
    <div className='teamContainer'>
    <Sidebar/>
    <TeamMembers/>
    </div>
  )
}

export default Team