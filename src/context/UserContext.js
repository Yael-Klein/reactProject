import React, { useState } from "react";
import AppContext from ".";

const  UserContext=({ children })=>{

    const [state, setState] = useState({currentPhoto:null });

    const updateCurrentPhoto= (photo) => {
        setState((prevState) => ({ photo }))
    }

    return (<AppContext.Provider
        value={{ photo: state.photo,updateCurrentPhoto}}>
        {children}
    </AppContext.Provider>)
}


export default UserContext