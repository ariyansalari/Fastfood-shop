import { Button, IconButton, TextField, ThemeProvider, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { LoadingButton } from '@mui/lab';
import Divider from '@mui/material/Divider';
import { Usesignup } from "./usesignup";



export const Signup = () => {
 const{
  register,
  errors,
  handleSubmit,
  handleregister,
  theme,
  Root,
  handleMouseDownPassword,
  handleClickShowPassword,
  showPassword,
  setShowPassword,
  loading,
  setLoading,
      } =Usesignup()
  return(
       <Container maxWidth="sm">

        <img className="absolute top-0 left-0"  src="../../public/photo/signup/Ellipse 126.png" alt="" />
        <img className="absolute top-0 left-0" src="../../public/photo/signup/Ellipse 127.png" alt="" />
        <img className="absolute right-0 top-0" src="../../public/photo/signup/Ellipse 128.png" alt="" />
        <div className="mt-24">

        <ThemeProvider theme={theme}>
  <Typography variant="h1">Sign Up</Typography>
</ThemeProvider>

<form onSubmit={handleSubmit(handleregister)} action="
">
    <div className="flex flex-col">
    <label htmlFor="">Full name</label>
<TextField {...register("fullname")} error={Boolean(errors.fullname?.message)} helperText={errors.fullname?.message} placeholder="Enter your name"/>


    </div>
<div className="flex flex-col">


<label htmlFor="">E-mail</label>
<TextField  {...register("email") }  error={Boolean(errors.email?.message)} helperText={errors.email?.message}  placeholder="Enter your email"/>

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



<LoadingButton loading={loading} type="submit">SIGN UP</LoadingButton>

</form>
<Typography>Already have an account? <a>Login</a></Typography>

<Root>
 
  <Divider>Sign up with</Divider>

</Root>
<div className="flex justify-between">


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

</div>
        </div>

        </Container>

      );
}
 
