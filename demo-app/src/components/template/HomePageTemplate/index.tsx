import { Stack } from "@mui/material";
import React from "react";
import styled from 'styled-components';
interface HomepageProps{
   LoginForm:React.ReactNode;
}
const TemplateStyle=styled.div`
    margin-top: 40px;
    width: 400px;
    height: 350px;
    border-radius: 20px;
    background-color:white;
    padding: 20px;
`;

const HomePageTemplate:React.FC<HomepageProps>=({LoginForm})=>{
    return(
       <TemplateStyle>
        <Stack mb={2}>
              <div>{LoginForm}</div>
        </Stack>
       </TemplateStyle>
    );
}
export default HomePageTemplate;