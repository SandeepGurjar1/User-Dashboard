import React from 'react';
import "./Salary.css"
import Sidebar from '../../Component/Sidebar';
import Salaries from '../../Component/Salaries';

function Team() {
  return (
    <div className='Salary'>
    <Sidebar/>
    <Salaries/>
    </div>
  )
}

export default Team