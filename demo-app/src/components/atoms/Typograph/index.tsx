import React from 'react';
import {Typography,TypographyProps as MuiTypographyProps} from '@mui/material';
interface TypographyProps{
    variant:MuiTypographyProps['variant'];
    children:string;
    // style?:React.CSSProperties;
}
const TypographyComp:React.FC<TypographyProps>=({variant,children})=>{
    return(
        <div>
            <Typography variant={variant}>{children}</Typography>
        </div>
    );
}
export default TypographyComp;