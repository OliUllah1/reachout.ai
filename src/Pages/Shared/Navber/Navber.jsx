import React from 'react';
import logo from '../../../assets/images/logo/Logo.png';
import logo1 from '../../../assets/images/logo/Logo1.png'
import { FaRegCommentAlt,FaRegBell, FaChevronDown,FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa";
import img from '../../../assets/images/Ellipse445.png'
const Navber = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <img className='hidden lg:block' src={logo} alt="" />
    <img className='block lg:hidden' src={logo1} alt="" />
    <div className="lg:ml-16  lg:flex space-x-1 lg:space-x-3">
   <button className='border hidden lg:block w-8 h-8 pl-2'><FaAngleLeft></FaAngleLeft></button>
   <p className='flex w-full flex-wrap text-[8px] lg:text-base items-center font-semibold'>My Jobs <FaAngleRight></FaAngleRight> Fontend Developer <FaAngleRight></FaAngleRight> Job Management </p>
  </div>
  </div>
  
  <div className="navbar-end">
  <div className='flex gap-2 lg:gap-5 item-center justify-center'>
    <p className='bg-[#E7EEF5] w-8 h-8 rounded-full'><FaRegCommentAlt className='mt-2 ml-2'></FaRegCommentAlt></p>
    <p className='bg-[#E7EEF5] w-8 h-8 rounded-full'><FaRegBell className='mt-2 ml-2'></FaRegBell></p>
  </div>
  <span className='mx-4 hidden lg:block mb-1 text-gray-300'>|</span>
  <div className='lg:flex gap-3 item-center'>
    <div> 
        <img className='ml-2 lg:ml-0' src={img} alt="" />
    </div>
    
    <div className='hidden lg:block'>
        <p className='font-bold text-[#0C579B m-0 p-0]'>Oli Ullah</p>
        <p className='text-gray-500'>Recruiter</p>
    </div>
    <button className='ml-3 hidden lg:block text-gray-500'><FaChevronDown></FaChevronDown></button>
    
  </div>
  </div>
  <div className='block lg:hidden mx-4'>
      <button className='text-2xl mt-1'><FaBars></FaBars></button>
    </div>
</div>
    );
};

export default Navber;