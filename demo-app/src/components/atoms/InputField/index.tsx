import React from 'react';
import {TextField} from '@mui/material';
interface TextfieldProps{
    label:string;
    type:string;
    onChanges:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComp:React.FC<TextfieldProps>=({label,type,onChanges})=>{
    return(
        <div>
            <TextField  variant='outlined' onChange={onChanges} label={label} type={type} required></TextField>
        </div>
    );
}
export default TextFieldComp;