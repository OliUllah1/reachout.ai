import React from 'react';

const JobManagement = () => {
    return (
        <div className='bg-white w-full h-full px-5'>
            <form  action="">
                <div className='lg:flex gap-5'>
                <div className= 'w-full lg:w-[45%]'>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Job Title</span>
                    </label>
                    <input type="text" placeholder="Job Title" className="py-1 px-4 rounded-full border border-gray-400" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Hiring Manager</span>
                    </label>
                    <input type="text" placeholder="Hiring Manager" className="py-1 px-4 rounded-full border border-gray-400" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Department</span>
                    </label>
                    <input type="text" placeholder="Department" className="py-1 px-4 rounded-full border border-gray-400" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Team</span>
                    </label>
                    <input type="text" placeholder="Team Name" className="py-1 px-4 rounded-full border border-gray-400" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Client</span>
                    </label>
                    <input type="text" placeholder="Client Name" className="py-1 px-4 rounded-full border border-gray-400" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Priority</span>
                    </label>
                    <select className=" px-4 h-9 select select-sm rounded-full border border-gray-400">
                        <option disabled selected>Priority</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Status</span>
                    </label>
                    <select className=" px-4 h-9 select select-sm rounded-full border border-gray-400">
                        <option disabled selected>Status</option>
                        <option>open</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-gray-600">Stage</span>
                    </label>
                    <select className=" px-4 h-9 select select-sm rounded-full border border-gray-400">
                        <option disabled selected>Stage</option>
                        <option>initial</option>
                    </select>
                </div>
                </div>
                <div className='lg:w-[55%] w-full'>

                    <div className="w-full mt-3">
                        <p className='font-bold text-gray-500 mb-3'>Upload your Job Description</p>
                        <label className="flex justify-center w-full h-28 px-4 transition bg-white border-2 border-green-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span className="flex items-center space-x-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <span className="font-medium text-green-500">Drop or Upload your file</span>
                        </span>
                        <input type="file" name="file_upload" className="hidden" />
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="font-bold text-gray-500 mt-2">Job Description</span>
                        </label>
                    <textarea placeholder="Copy/Paste your job description" className="textarea textarea-bordered textarea-lg w-full h-[370px]" ></textarea>

                    </div>
                </div>
                </div>
                <div className='flex justify-end'>
                    <div className=' space-x-5'>
                    <input type="submit" className='px-7 py-2 bg-white border border-green-400 rounded-full font-bold text-green-500' value="Cancel" />
                    <input className='px-7 py-2 border border-green-400 bg-green-500 rounded-full font-bold text-white' type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobManagement;