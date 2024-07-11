import React from 'react';
import {TextField} from '@mui/material';
interface TextfieldProps{
    label:string;
    type:string;
    onChanges:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComp:React.FC<TextfieldProps>=(props)=>{
    return(
        <div>
            <TextField  variant='outlined' onChange={props.onChanges} label={props.label} type={props.type} required></TextField>
        </div>
    );
}
export default TextFieldComp;