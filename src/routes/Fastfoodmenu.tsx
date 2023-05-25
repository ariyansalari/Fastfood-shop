import { Asian, Burger, Donat, Mexican, Pizza } from "@/assets";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactElement } from "react";

interface ifastfoodmenu{
    name:string,
    svg:ReactJSXElement,
    isShow?:Boolean,
    id:string
  
}
export const Fastfoodmenu:ifastfoodmenu[]=[
    {
        id:"1",
svg:<Burger/>,
name:"Burger",
isShow:false,
},
{
    id:"2",
    svg:<Donat/>,
    name:"Donat",
    isShow:false,
},
{
    id:"3",
svg:<Pizza/>,
name:"Pizza",
isShow:false,
},
{
    id:"4",
    svg:<Mexican/>,
    name:"Mexican",
    isShow:false,
},
{
    id:"5",
    svg:<Asian/>,
    name:"Asian",
    isShow:false,
}
]