import { instance } from "@/api/constants";
import Cookies from "js-cookie";
import { useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

export const UseAth = () => {
   const navigate= useNavigate()
   const{pathname}=useLocation()
     useEffect(()=>{
if(!Cookies.get("token"))
{
navigate("/")
}else{
     instance.defaults.headers.common.Authorization=Cookies.get("token")
if(pathname==="/signup"||"/")
{
    
    navigate("/Home")
}
}
     },[])

}
 