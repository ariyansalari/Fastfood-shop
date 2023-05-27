import { Slidebar } from "@/components/Slidebar";
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import { UseAth } from "@/Hooks/UseAuth";
import { Avatar, Box, Typography } from "@mui/material";
import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {  Footers } from "@/routes/FooterSvg";

export const Authlayout = () => {
 UseAth()
 const [footers,setfooter]=useState(Footers)

 
    return (

    
<Container maxWidth="sm">
        <header>
            <nav>
                <Slidebar/>


            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Box sx={{width:320,display:"flex",justifyContent:"space-between",backgroundColor:"#FFFFFF",position:"absolute",bottom:0}}>
{Footers.map((i,index)=>(
 
    <Box onClick={(e)=>{

        let cF = footers
        cF[index].isShow = !cF[index].isShow
       
       setfooter([...cF])
  console.log(footers)
        }}  sx={{fill:i.isShow?"#FE724C":"#D3D1D8"}}>
     <Box >{i.svg}</Box>

    </Box>

))
}

            </Box>
        </footer>
        </Container>
      
      );
}
 
