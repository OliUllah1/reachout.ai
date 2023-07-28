import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegFolder,FaRegHandshake,FaRegFileAlt,FaRegComments,FaSearch,FaThLarge,FaUserCheck } from "react-icons/fa";
const SideNavber = () => {
    return (
        <div className='pl-2 pr-4 pt-5'>
        
           <button className='w-full flex items-center justify-center bg-green-400 py-1 rounded-full text-white text-md'>Create Now Job <p className=' text-white px-2 text-3xl'>+</p></button>
            <ul className='text-gray-600 mt-5 mb-14'>
            <li className=''><NavLink to="/" className={({ isActive }) =>isActive ? "primary-btn" : "secondary-btn"}><FaRegFolder> </FaRegFolder> My Jobs</NavLink></li>
            <li className=''><NavLink to="/dashboard" className={({ isActive }) =>isActive ? "primary-btn" : "secondary-btn"}><FaThLarge></FaThLarge>Dashboard</NavLink></li>
            <li><NavLink to="/candidateR3achout" className={({ isActive }) =>isActive ? "primary-btn" : "secondary-btn"}><FaUserCheck></FaUserCheck>Candidate R3achout</NavLink></li>
            <li><NavLink to="/searchAssistant" className={({ isActive }) =>isActive ? "primary-btn" : "secondary-btn"}><FaSearch></FaSearch>Search Assistant</NavLink></li>
            <li><NavLink to="/interview" className={({ isActive }) =>isActive ? "primary-btn" : "secondary-btn"}><FaRegComments></FaRegComments>Interview</NavLink></li>
            <li><NavLink to="/intake" className={({ isActive }) =>isActive ? "primary-btn" : "secondary-btn"}><FaRegHandshake></FaRegHandshake>Intake</NavLink></li>
            <li><NavLink to="/jobDescription" className={({ isActive }) =>isActive ? "primary-btn" : "secondary-btn"}><FaRegFileAlt></FaRegFileAlt>Job Description</NavLink></li>
            </ul>
            <div className='bg-[#0C579B] text-center rounded px-4 py-5 text-white space-y-2 w-full'>
                <h3 className='font-semibold'>Upgrade your account</h3>
                <p className='text-md text-gray-300'>Increase your usage and get early access to new features</p>
                <button className='w-full bg-green-400 py-2 rounded-full text-white text-md'>Upgrade</button>
            </div>
        </div>
    );
};

export default SideNavber;