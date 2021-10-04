import React, { useState } from "react";
import AppContext from ".";

const  UserContext=({ children })=>{

    const [state, setState] = useState({ user: {
        studentId: 2,
        studentTz :"2345",
        studentFirstName:"לאה",
        studentLastName:"לוי",
        studentPel: "032586515",
        studentCity:"בני ברק",
        studentAddress:"ירושלים 8",
        studentParentName:"חנה",
        studentParentPel:"0527648785",
        studentParentEmail:"c@gmail.com"
    } });

    const updateUser = (user) => {
        setState((prevState) => ({ user }))
    }

    return (<AppContext.Provider
        value={{ user: state.user, updateUser: updateUser }}>
        {children}
    </AppContext.Provider>)
}


export default UserContext