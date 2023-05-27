import {  Button,Typography } from "@mui/material";
import { Box } from "@mui/system";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/system';
import { Facebook, Google } from "@/assets";


export const Welecomescreen = () => {
    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
          marginTop: theme.spacing(2),
        },
      }));
      const navigate=useNavigate()
    return (  
   
       <Box component={"div"} sx={{backgroundImage:"url(../../public/photo/welecome.png)",width:320,height:812}}>
        <Box sx={{display:"flex", justifyContent:"end"}}>
        <Button sx={{backgroundColor:"#FFFFFF",color:"#FE724C",borderRadius:27,mt:"27px",mr:"26px",mb:"113px"}}>Skip</Button>
</Box>


<Typography sx={{fontWeight:600,ml:"12px"}} variant="h3">Welcome to</Typography>
<Typography variant="h3" sx={{color:"#FE724C",fontWeight:600,ml:"12px"}}>FoodHub</Typography>
<Typography sx={{color:"#30384F",ml:"12px",mt:"19px",width:"250px",fontSize:"18px"}} variant="body1">Your favourite foods delivered fast at your door.</Typography>

<Root sx={{mt:"213px"}}>
     
     <Divider variant="middle" sx={{color:"white"}} > Sign up with </Divider>
     </Root>
     <Box sx={{display:"flex",justifyContent:"space-around" ,mt:"26px"}}>
    
    
    <Stack direction="row" spacing={2}>
    <Button sx={{backgroundColor:"#FFFFFF",border:"none",borderRadius:"27px",width:"140px",height:"60px",boxshadow: '17.8734px 17.8734px 35.7469px rgba(211, 209, 216, 0.25)',"&:hover": {backgroundColor: "#FFFFFF" }}} variant="outlined" startIcon={<Facebook/>}>
      Delete
    </Button>
    </Stack>

<Stack direction="row" spacing={2}>
    <Button sx={{backgroundColor:"#FFFFFF",border:"none",borderRadius:"27px",width:"140px",height:"60px",boxshadow: '17px 17px 35.px rgba(211, 209, 216, 0.25)',"&:hover": {backgroundColor: "#FFFFFF" }}} variant="outlined" startIcon={<Google/>}>
      Delete
    </Button>
    </Stack>

</Box>
   
 

<Box sx={{display:"flex",justifyContent:"center",mt:"23px"}} component={"div"}>
<Button sx={{backgroundColor: "rgba(255,255,255,0.21)",color:"white",borderRadius:30,width:310,height:54,"&:hover":{backgroundColor:"gray",color:"black",border:"2px solid white"},border:"1px solid black",fontWeight:600}} variant="outlined"  onClick={()=>navigate("/signup")}>Start with email or phone</Button>

</Box>

   <Typography variant="body2" sx={{textAlign:"center",mt:"25px"}}>Already have an account? <a onClick={()=>navigate("/signup")}>Sign In</a></Typography>
       </Box>
    );
}
 
