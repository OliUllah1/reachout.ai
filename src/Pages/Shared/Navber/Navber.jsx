import React from 'react';
import logo from '../../../assets/images/logo/Logo.png';
import { FaRegCommentAlt,FaRegBell, FaChevronDown,FaAngleLeft, FaAngleRight } from "react-icons/fa";
import img from '../../../assets/images/Ellipse445.png'
const Navber = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
      </ul>
    </div>
    <img src={logo} alt="hi" />
    <div className="ml-16 flex space-x-3">
   <button className='border w-8 h-8 pl-2'><FaAngleLeft></FaAngleLeft></button>
   <p className='flex items-center font-semibold'>My Jobs <FaAngleRight></FaAngleRight> Fontend Developer <FaAngleRight></FaAngleRight> Job Management </p>
  </div>
  </div>
  
  <div className="navbar-end">
  <div className='flex gap-5 item-center justify-center'>
    <p className='bg-[#E7EEF5] w-8 h-8 rounded-full'><FaRegCommentAlt className='mt-2 ml-2'></FaRegCommentAlt></p>
    <p className='bg-[#E7EEF5] w-8 h-8 rounded-full'><FaRegBell className='mt-2 ml-2'></FaRegBell></p>
  </div>
  <span className='mx-4 mb-1 text-gray-300'>|</span>
  <div className='flex gap-3 item-center'>
    <div> 
        <img src={img} alt="" srcset="" />
    </div>
    <div>
        <p className='font-bold text-[#0C579B m-0 p-0]'>Oli Ullah</p>
        <p className='text-gray-500'>Recruiter</p>
    </div>
    <button className='ml-3 text-gray-500'><FaChevronDown></FaChevronDown></button>
  </div>
  </div>
</div>
    );
};

export default Navber;