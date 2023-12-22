import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"Home",
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//           path:"",
//           element:<ContactUs/>
//       }
//     ]

//   }

// ])

const rout = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element ={<About/>}/>
    <Route path="ContactUs" element ={<ContactUs/>}/>
    <Route path="User/:UserId" element = {<User/>}/>
    <Route path="github" element={<Github/>}/>
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>,
)
