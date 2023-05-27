import { Safari ,Location, Shop, Favorite,Notification} from "@/assets";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Ifooter{
    svg:ReactJSXElement,
    isShow:Boolean
}


export const Footers:Ifooter[]=[
    {
svg:<Safari fill=""/>,
isShow:false,
},
{
    svg:<Location fill=""/>,
    isShow:false,
    },
    {
        svg:<Shop fill=""/>,
        isShow:false,
        },
        {
            svg:<Favorite fill=""/>,
            isShow:false,
            },
            {
                svg:<Notification fill=""/>,
                isShow:false,
                }
]