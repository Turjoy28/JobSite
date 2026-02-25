import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from "./components/HomeCards"
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import Job,{jobLoader} from './Pages/job';
import AddJobPage from './Pages/AddJobPage';



const App = () => {
  //Add New Job
  const addJob=async(newjob)=>{
  const res =await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(newjob),
  })
  return;
}


const deleteJob=async(id)=>{
  const res=await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
    
  })
  return;
}



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<Job deleteJob={deleteJob}/> } loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
    </Route>

  )
)
  return <RouterProvider router={router} />
}

export default App;