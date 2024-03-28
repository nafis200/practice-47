import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/roots/Roots.jsx';
import Errorpage from './components/error/Errorpage.jsx';
import Home from './components/home/Home.jsx';
import AppliedJobs from './components/appliedjobs/AppliedJobs.jsx';
import Jobdetails from './components/featires/jobdetails/Jobdetails.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Errorpage></Errorpage>,
    children:[
       {
          path:'/',
          element:<Home></Home>,
       },
       {
         path: '/applied',
         element:<AppliedJobs></AppliedJobs>,
         loader: ()=> fetch('/jobs.json'),
       },
       {
         path:'/job/:id',
         element:<Jobdetails></Jobdetails>,
         loader:()=>fetch('/jobs.json')
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
        <HelmetProvider>
        <RouterProvider router={router} />
        </HelmetProvider>
      
     
  </React.StrictMode>,
)
