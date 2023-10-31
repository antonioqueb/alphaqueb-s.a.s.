import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home'


const router = createBrowserRouter([
    {
    path: "/",
    element: <Home/>,
    errorElement: <div><h1>404</h1></div>,

    },
    {
    path: "/about",
    element: <div><h1>About</h1></div>,
    },
    {
    path: "/users",
    element: <div><h1>Users</h1></div>,
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

