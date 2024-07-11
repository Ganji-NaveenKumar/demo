import { Stack } from "@mui/material";
import React from "react";
import './index.css'
interface HomepageProps{
   LoginForm:React.ReactNode;
}
const HomePageTemplate:React.FC<HomepageProps>=(props)=>{
    return(
        <div id='template'>
            <Stack mb={2}>
              <div>{props.LoginForm}</div>
            </Stack>
        </div>
        
    );
}
export default HomePageTemplate;