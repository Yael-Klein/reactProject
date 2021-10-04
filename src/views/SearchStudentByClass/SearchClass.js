import { GridHeaderPlaceholder } from "@material-ui/data-grid";
import React, { useState } from "react";

export default function SearchClass({handleSubmit}){

    const [state,setState] = useState({StudyGroupClass:""});

    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit( state.StudyGroupClass)
    }

    const handleChange = (e)=>{
        setState(prevState=>({...prevState,[e.target.name]:e.target.value}))
    }
    
    return (
        <form onSubmit={onSubmit} style={{ height: 100, width: '85%',marginLeft:100, direction: 'rtl',textAlign:"right"}}> 
        <input name="StudyGroupClass" type="text" value={state.StudyGroupClass} onChange={handleChange}/>
        <button type="submit">חיפוש</button>
        </form>
    )
}