import React from 'react';
import { FaRegSun,FaChevronDown  } from "react-icons/fa";
const InformationBar = () => {
    return (
        <div className='flex mb-5 text-gray-600 justify-between bg-white px-4 py-3 rounded'>
            <div> 
                <p className=''>Job Title</p>
                <div className='flex gap-3 items-center'>
                    <h4 className='font-bold'>Fontend Developer</h4>
                    <FaChevronDown></FaChevronDown>
                    <FaRegSun></FaRegSun>
                </div>
            </div>
            <div>
                <p>Hiring Manager</p>
                <h5 className='font-bold'>Nail Patel</h5>
            </div>
            <div>
                <p>Department</p>
                <h5 className='font-bold'>Techn</h5>
            </div>
            <div>
                <p>Department</p>
                <h5 className='font-bold'>Techn</h5>
            </div>
            <div>
                <p>Team</p>
                <h5 className='font-bold'>Team-A</h5>
            </div>
            <div>
                <p>Client</p>
                <h5 className='font-bold'>John Doe</h5>
            </div>
            <div>
                <p>States</p>
                <h5 className='font-bold'>Open</h5>
            </div>
            <div>
                <p>Priority</p>
                <h5 className='font-bold'>High</h5>
            </div>
        </div>
    );
};

export default InformationBar;