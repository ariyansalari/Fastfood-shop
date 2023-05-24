import { animated, useChain, useSpring } from '@react-spring/web'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton, makeStyles } from '@mui/material';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import Container from '@mui/material/Container';
import { Slidebar } from '@/components/Slidebar';


export const Homescreen = () => {


const photo1style=useSpring({
   from:{
     opacity:1

   },
    to:[
        {
           
            opacity:0
            
        },
    ],
    config:{
        duration:4000,
    },
    delay:1500,
  
  
})

    return ( 
        <Container maxWidth="sm">

        <div>
        <Slidebar/>
    {/* <animated.img  style={photo1style} className="absolute top-0" src="../../public/photo/splash.png" alt="" /> */}


</div>
</Container>

     );

    }
 



