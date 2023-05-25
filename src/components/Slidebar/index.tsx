import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import PaymentIcon from '@mui/icons-material/Payment';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReorderIcon from '@mui/icons-material/Reorder';

export const Slidebar=()=> {
  const [state, setState] = React.useState(
    false
  );

  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };
const array=[
  {name:'My Orders', icon: <ShoppingCartIcon/>} ,
  {name:'My Profile', icon: <PersonIcon/>},
 {name:'Delivery Address', icon: <LocationOnIcon/>} ,
  {name:'Payment Methods', icon: <PaymentIcon/>} ,
   {name:'Contact Us', icon: <EmailIcon/>},
   {name:"Settings", icon: <SettingsIcon/>},
   {name:"Helps&FAQs", icon: <HelpCenterIcon/>}]
  const list = () => (
    <Box sx={{marginLeft:1}}>
          <Stack direction="row" >
      <Avatar sx={{width:90,height:90,mt:3}} src="../../public/photo/slidebar/profile.png" />
    </Stack>

    <Box sx={{marginLeft:2}}>
      <Typography sx={{fontWeight:600}}>Farion Wick</Typography>
      <Typography sx={{color:"gray",mb:3}}>farionwick@gmail.com</Typography>
    </Box>
    <Box
      sx={{backgroundColor:'white'}}
      role="presentation"
     
      onKeyDown={toggleDrawer( false)}
    >
      <Box sx={{width:"270px"}}>
        {array.map((i) => (
         <Box component={"div"} sx={{display:"flex",flexDirection:"column",alignItems:"start"}}>


             <Button key={i.name}  variant="outlined" startIcon={i.icon} sx={{border:"none",color:"gray"}}>
         
             <ListItemText>
             <Typography key={i.name} sx={{color:"black",fontWeight:600}}>{i.name}</Typography>

             </ListItemText>
             
      </Button>
</Box>
     
        ))}
        </Box>
    </Box>
    <LoadingButton sx={{ml:1,mb:1,mt:8,borderRadius:28,backgroundColor:"#FE724C",color:"white",p:1,fontWeight:600,"&:hover": {backgroundColor: "#FE724C" }}} startIcon={<PowerSettingsNewIcon sx={{backgroundColor:"white",borderRadius:28,color:"#FE724C"}}/>}>Log Out</LoadingButton>
    </Box>
  );

  return (
    
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{color:"black"}}
            >
              
              <ReorderIcon/>
              </IconButton>
              </Button>
          
          <SwipeableDrawer
            anchor={"left"}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          
          </SwipeableDrawer>
        </React.Fragment>

    
    </div>

  );
}
