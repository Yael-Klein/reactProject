import React, { useState } from "react";

export default function SearchBar({handleSubmit}){

    const [state,setState] = useState({
        // date:"",
        proffesional:""});

    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit(
            // state.date,
            state.proffesional)
    }

    const handleChange = (e)=>{
        setState(prevState=>({...prevState,[e.target.name]:e.target.value}))
    }
    
    return (
        <form onSubmit={onSubmit}  style={{ height: 100, width: '85%',marginLeft:100, direction: 'rtl',textAlign:"right"}}> 
        {/* <input name="date" type="date" value={state.date} onChange={handleChange}/> */}
        <input name="proffesional" type="text" value={state.proffesional} onChange={handleChange}/>
        <button type="submit">חיפוש</button>
        </form>
    )
}