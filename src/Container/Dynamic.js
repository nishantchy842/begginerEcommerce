import React from 'react';
import '../App.css';
import { useState } from 'react';
const Dynamics=()=> {
  const [dynamicStyle, setDynamicStyle] = useState({width:'100px'}); 
  const copydynamicStyle = {...dynamicStyle}//dynamicStyle(state) can't be updated so it is copied in another variable(copydynamicStyle)
  
  const assignDynamicStyle= (inputText)=> {
     const a = inputText.split('=')
      let leftside = a[0]
      let right = a[1]
      copydynamicStyle[leftside]=right
      setDynamicStyle(copydynamicStyle)
  }

  return (
    <>
    <div>
    <div className="App" style={dynamicStyle}>
    </div>
    <input 
    onKeyUp={(e)=> assignDynamicStyle(e.target.value)}
    placeholder="enter any style"/>
    </div> 
    </>
  );
}
export default Dynamics;