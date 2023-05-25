import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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

  const list = () => (
    <Box
      sx={{backgroundColor:'white'}}
      role="presentation"
      // onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box sx={{display:'flex',flexDirection:'column',color:'white'}}>
        {['My Orders', 'My Profile', 'Delivery Address' , 'Payment Methods' , 'Contact Us',"Settings","Helps&FAQs"].map((text) => (
          <Button sx={{padding:1.5}}>
              <ListItemText sx={{textAlign:'center',color:'black'}} primary={text} />
              <ListItemIcon sx={{minWidth:0}}>
                <NavigateNextIcon sx={{color:"white"}}/>
              </ListItemIcon>
            </Button>
        ))}
        </Box>
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
              
              <DragHandleIcon/>
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
