import React from "react";
import  ReactDOM  from "react-dom/client";
import { ThemeProvider } from '@mui/material/styles';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Homescreen, Login, Signup } from "./screens";
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homescreen/>,
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/Login",
      element:<Login/>
    }
  ]);

const root=ReactDOM.createRoot(document.getElementById("root")as HTMLElement)

root.render(
    <React.StrictMode>
<Toaster/>
        <RouterProvider router={router} />
    </React.StrictMode>
)