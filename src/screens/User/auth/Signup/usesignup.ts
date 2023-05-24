import { Mode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { createTheme, styled } from '@mui/material/styles';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
export const  Usesignup= () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading,setLoading]=React.useState(false)
    const navigate=useNavigate()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
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
      const registerSchema=yup.object({
          fullname:yup.string().required("insert your fullname!"),
          email:yup.string().required().email(),
          password:yup.string().required().min(8)
      })
      const handleregister=React.useCallback((data)=>{
        setLoading(true)
        toast.success("you registerd succesfuly!")
  console.log(data)
  
  
  setLoading(false)
  navigate("/login")
      },[])
  
      const {register,formState:{errors},handleSubmit}=useForm({
          resolver:yupResolver(registerSchema),
          mode:"onSubmit"
      })

    return {
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
    };
}
 
