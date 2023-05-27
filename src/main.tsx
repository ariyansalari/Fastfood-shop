import React from "react";
import  ReactDOM  from "react-dom/client";
import { ThemeProvider } from '@mui/material/styles';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Homescreen, Login, Signup, Welecomescreen } from "./screens";
import { Toaster } from "react-hot-toast";
import { Mainlayout } from "./layout";
import { Authlayout } from "./layout/authlayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children:[
        {
path:"/",
element:<Welecomescreen/>
        },

      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/Login",
        element:<Login/>
      }
    ],
  
  },
  {
    path:"/Home",
    element:<Authlayout/>,
    children:[{
      path:"/Home",
      element:<Homescreen/>
    }]
  }
  ]);

const root=ReactDOM.createRoot(document.getElementById("root")as HTMLElement)

root.render(
    <React.StrictMode>
<Toaster/>
        <RouterProvider router={router} />
    </React.StrictMode>
)