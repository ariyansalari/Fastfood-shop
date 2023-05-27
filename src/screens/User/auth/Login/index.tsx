import { Box, Button, createTheme, IconButton, TextField, ThemeProvider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container } from '@mui/system';
import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { LoadingButton } from '@mui/lab';
import * as yup from "yup"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { yupResolver } from '@hookform/resolvers/yup';
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


export const Login = () => {
        const Root = styled('div')(({ theme }) => ({
            width: '100%',
            ...theme.typography.body2,
            '& > :not(style) + :not(style)': {
              marginTop: theme.spacing(2),
            },
          }));
        const theme = createTheme({
            typography:{
                fontSize:4,
               
            }
            
        });
        const loginSchema=yup.object({
            email:yup.string().required().email(),
            password:yup.string().required().min(8)
        })
        const handlelogin=React.useCallback((data)=>{
          setLoading(true)
toast.success("login succesfully!")
          console.log(data)
          setLoading(false)
          navigate("/")
        },[])
        
        const {register,formState:{errors},handleSubmit}=useForm({
            resolver:yupResolver(loginSchema),
            mode:"onSubmit"
        })
        const [showPassword, setShowPassword] = React.useState(false);
        const [loading,setLoading]=React.useState(false)
        const navigate=useNavigate()
        const handleClickShowPassword = () => setShowPassword((show) => !show);
      
        return (

           <Container maxWidth="sm">
    
            <img className="absolute top-0 left-0"  src="../../public/photo/signup/Ellipse 126.png" alt="" />
            <img className="absolute top-0 left-0" src="../../public/photo/signup/Ellipse 127.png" alt="" />
            <img className="absolute right-0 top-0" src="../../public/photo/signup/Ellipse 128.png" alt="" />
            <div className="mt-24">


                <div className="absolute top-5 ">

              
                <Link to="/signup">
            <Button variant="contained" >
                <IconButton>

<ArrowBackIosIcon/>
                </IconButton>
</Button>
</Link>
</div>
    
            <ThemeProvider theme={theme}>
      <Typography variant="h1">Login</Typography>
    </ThemeProvider>
    
    <form onSubmit={handleSubmit(handlelogin)} action="
    ">
 
    <div className="flex flex-col">
    
    
    <label htmlFor="">E-mail</label>
    <TextField placeholder="Your email or phone"   {...register("email")}   error={Boolean(errors.email?.message)} helperText={errors.email?.message}/>
    
    </div>
    
    <div className="flex flex-col">
    <label htmlFor="">Password</label>

    <TextField
        
        id="filled-start-adornment"
        {...register("password")}
        error={Boolean(errors.password?.message)}
helperText={errors.password?.message}
placeholder="Enter new password"
        type={showPassword?"text":"password"}
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>

            {!showPassword?<VisibilityOff/>:<Visibility/>}
            </IconButton>
          </InputAdornment>,
        }}
        variant="outlined"
      />

    
    </div>
    
    
    
    <LoadingButton loading={loading} type="submit">Login</LoadingButton>
    
    </form>
    <Typography>Already have an account? <a>sign up</a></Typography>
    
    <Root>
     
      <Divider> Sign up with </Divider>
    
    </Root>
    <Box sx={{display:"flex",justifyContent:"space-around"}}>
    
    
          <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<FacebookIcon/>}>
            Delete
          </Button>
          </Stack>
    
    <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<GoogleIcon/>}>
            Delete
          </Button>
          </Stack>
    
    </Box>
            </div>
    
            </Container>
     );
}
 
