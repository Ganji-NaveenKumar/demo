import React, { useState } from 'react';
const DemoComp:React.FC=()=>{
    const [count,setcount]=useState(0);
    const handleClick=()=>{
        setcount(prevcount=>prevcount+2)
        setcount(prevcount=>prevcount+2)
        setcount(prevcount=>prevcount+2)
    }
    return(
        <>
        <h1>This is the count:{count}</h1>
        <button onClick={handleClick}>Click me</button>
        </>
    );
}
export default DemoComp;