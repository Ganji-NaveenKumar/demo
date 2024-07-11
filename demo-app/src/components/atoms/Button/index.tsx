import React from 'react';
import {Button} from '@mui/material';
interface ButtonProps{
    children:React.ReactNode;
    style:React.CSSProperties;
    onClick:()=>void;
}
const ButtonComp:React.FC<ButtonProps>=({children,style,onClick})=>{
    return(
        <div>
            <Button variant='contained' style={style} onClick={onClick}>{children}</Button>
        </div>
    );
}
export default ButtonComp;