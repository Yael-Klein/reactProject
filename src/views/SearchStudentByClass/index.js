import React, { useState } from "react"
import { Get1 } from "../../Requests";
import SearchBar from "./SearchClass";
import SearchClass from './SearchClass'
import StatusStudentByClassList from './StatusStudentByClassList'

export default function SearchStudentByClass() {
    const [state, setState] = useState({ studentList: [] });

    const handleSubmit = async (StudyGroupClass) => {
        try {
            let response = await Get1(`Teacher/GetClass?StudyGroupClass=${StudyGroupClass}`);
            setState({ studentList: response })
        }
        catch { }
    }

    return (<React.Fragment>
        <p style={{height: 50, width: '85%',marginLeft:100, marginTop:40, direction: 'rtl',textAlign:"right"}}>סטטוס תלמידים לפי כיתה</p>
        <SearchClass handleSubmit={handleSubmit}></SearchClass>
        <StatusStudentByClassList studentList={state.studentList}></StatusStudentByClassList>
    </React.Fragment>
    )
}
