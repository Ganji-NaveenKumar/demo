import React from 'react';
import {Button} from '@mui/material';
interface ButtonProps{
    children:React.ReactNode;
    style:React.CSSProperties;
    onClick:()=>void;
}
const ButtonComp:React.FC<ButtonProps>=(props)=>{
    return(
        <div>
            <Button variant='contained' style={props.style} onClick={props.onClick}>{props.children}</Button>
        </div>
    );
}
export default ButtonComp;