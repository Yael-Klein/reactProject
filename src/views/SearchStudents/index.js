import React, { useState } from "react"
import { Get1 } from "../../Requests";
import SearchBar from "./SearchBar";
import StatusesStudentList from "./StatusesStudentList";


export default function SearchStudents() {
    const [state, setState] = useState({ studentList: [] });

    const handleSubmit = async (proffesional) => {
        try {
            let response = await Get1(`Teacher/Get?proffesional=${proffesional}`);
            setState({ studentList: response })
        }
        catch { }
    }

    return (
        <React.Fragment>
            <p  style={{height: 50, width: '85%',marginLeft:100, marginTop:40, direction: 'rtl',textAlign:"right"}}>סטטוס תלמידות לפי מקצוע</p>
            <SearchBar handleSubmit={handleSubmit}></SearchBar>
            <StatusesStudentList studentList={state.studentList}></StatusesStudentList>
        </React.Fragment>
    )
}
