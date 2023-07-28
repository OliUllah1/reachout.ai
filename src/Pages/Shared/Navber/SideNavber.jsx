import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavber = () => {
    return (
        <div className='pl-2 pr-4 pt-5'>
        
           <button className='w-full flex items-center justify-center bg-green-400 py-1 rounded-full text-white text-md'>Create Now Job <p className=' text-white px-2 text-3xl'>+</p></button>
           <div>
            <ul className='text-gray-700'>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "primary-btn" : ""}>My Jobs</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "" : ""}>Dashboard</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "" : ""}>Candidate R3achout</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "" : ""}>Search Assistant</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "" : ""}>Interview</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "" : ""}>Intake</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "" : ""}>Job Description</NavLink></li>
            </ul>
           </div>
        </div>
    );
};

export default SideNavber;