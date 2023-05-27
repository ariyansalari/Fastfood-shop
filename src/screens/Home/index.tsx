import { animated, useChain, useSpring } from '@react-spring/web'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Avatar, IconButton, makeStyles, TextField, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Donat, Ratefilter } from '@/assets';
import { Fastfoodmenu } from '@/routes/Fastfoodmenu';
import Container from '@mui/material/Container';


export const Homescreen = () => {
const [fastfoodmenu,setFastfoodmenu]=React.useState(Fastfoodmenu)

    // const handleChange = (event: Event, newValue: number | number[]) => {
    //   setValue(newValue as number);
    // };


// const photo1style=useSpring({
//    from:{
//      opacity:1

//    },
//     to:[
//         {
           
//             opacity:0
            
//         },
//     ],
//     config:{
//         duration:4000,
//     },
//     delay:1500,
  
  
// })

    return ( 

<>
    <Box component={"div"}>
        <Typography sx={{fontSize:24,fontWeight:700}}>What would you like to order</Typography>

    </Box>
    <Box component={"div"} sx={{display:"flex",alignItems:"center"}}>
    <TextField
    
          id="outlined-start-adornment"
          placeholder='Find for food or restaurant...'
          sx={{ }}
          InputProps={{
            startAdornment: <InputAdornment position="start">
                <IconButton>
                <SearchIcon/>
                </IconButton>
          
            </InputAdornment>,
          }}
        />
        <Box component={"div"} sx={{ width:41}}>
            <IconButton>

        <Ratefilter/>
            </IconButton>

        </Box>

    </Box>


<Box component={"div"} sx={{display:"flex",justifyContent:"space-between",width:320}}>
{fastfoodmenu.map((i,index)=>(
    <Box  onClick={(e)=>{
    console.log(Fastfoodmenu)
    let cF = fastfoodmenu
    cF[index].isShow = !cF[index].isShow
   
   setFastfoodmenu([...cF])
    }} sx={{backgroundColor:i.isShow?"#FE724C":"white",boxShadow:3,borderRadius:100, display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",width:58,height:98}}>
     <Avatar> {i.svg}</Avatar>
    <Typography sx={{fontSize:11}}>{i.name}</Typography>
    </Box>

  
))}
</Box>

  
  
</>

     )

    }
 



