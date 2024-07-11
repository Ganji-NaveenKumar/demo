import React from 'react';
import {Typography,TypographyProps as MuiTypographyProps} from '@mui/material';
interface TypographyProps{
    variant:MuiTypographyProps['variant'];
    children:string;
    style:React.CSSProperties;
}
const TypographyComp:React.FC<TypographyProps>=(props)=>{
    return(
        <div>
            <Typography variant={props.variant}>{props.children}</Typography>
        </div>
    );
}
export default TypographyComp;