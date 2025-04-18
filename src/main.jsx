import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './assets/Home/Home.jsx'
import About from './assets/About/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true, Component:Home
      },
      {
        path:"/about",
        Component:About
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
