import React from 'react';
import InformationBar from '../InformationBar/InformationBar';
import MyJobs from '../MyJobs/MyJobs';


const Home = () => {
    return (
        <div className='lg:p-5 p-2'>
            <InformationBar></InformationBar>
            <MyJobs></MyJobs>
        </div>
    );
};

export default Home;