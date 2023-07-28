import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobManagement from '../JobManagement/JobManagement';

const MyJobs = () => {
    return (
        <Tabs>
        <TabList className="lg:flex w-full justify-between text-gray-600 font-semibold">
          <Tab  className="pr-8 pl-5 py-4 rounded-lg cursor-pointer">
          Job management
          </Tab>
          <Tab  className="pr-8 pl-5 py-4 rounded-lg cursor-pointer">
          JD rewrite
          </Tab>
          <Tab className="pr-8 pl-5 py-4  rounded-lg cursor-pointer">
          R3achout
          </Tab>
          <Tab className="pr-8 pl-5 py-4  rounded-lg cursor-pointer">
          Search
          </Tab>
          <Tab className="pr-8 pl-5 py-4  rounded-lg cursor-pointer">
          Intake
          </Tab>
          <Tab className="pr-8 pl-5 py-4  rounded-lg cursor-pointer">
          Interview
          </Tab>
        </TabList>

        <TabPanel>
          <JobManagement></JobManagement>
        </TabPanel>
        <TabPanel>
        
        </TabPanel>
        <TabPanel>
        
        </TabPanel>
      </Tabs>
    );
};

export default MyJobs;