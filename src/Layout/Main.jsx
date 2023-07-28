import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';
import SideNavber from '../Pages/Shared/Navber/SideNavber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='flex'>
                <div className='w-[18%] h-[100vh]'>
                    <SideNavber></SideNavber>
                </div>
                <div className='w-[86%] h-[700px] bg-[#eff4fa]'><Outlet></Outlet></div>
            </div>
            
        </div>
    );
};

export default Main;