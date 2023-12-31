import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Router/router.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:px-10 px-3'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,


)
