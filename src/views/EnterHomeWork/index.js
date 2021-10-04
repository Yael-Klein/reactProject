import React, { useState } from "react"
import { Get1 } from "../../Requests";
import ControlledOpenSelect from "./ControlledOpenSelect";
import Enter from "./Enter";
import SearchBar from "./SearchBar";
import StatusesStudentList from "./StatusesStudentList";


export default function EnterHomeWork(){
    const [state,setState] = useState({classesList:[]});

    // const handleSubmit = async (teacherId)=>{
    //     try {
    //     //    let response = await Get1(`StudyGroup/Get?teacherId=${1}`);
    //     //     setState({classesList:response})           
    //     }
    //     catch {}
    // }

    return (<React.Fragment>
           <Enter 
            // handleSubmit={handleSubmit}
            ></Enter>
          <ControlledOpenSelect
        //    classesList={state.classesList}
           ></ControlledOpenSelect>
          </React.Fragment>     
    )
}