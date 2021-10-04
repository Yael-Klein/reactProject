import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react"
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Icon from '@material-ui/core/Icon';




function StatusesStudentList({ studentList = [] }) {
    return (

        <Table style={{ height: 200, width: '85%', marginLeft: 100, direction: 'rtl', textAlign: "right" }}>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>שם פרטי</TableCell>
                    <TableCell>שם משפחה</TableCell>
                    <TableCell>סטטוס הכנה</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {studentList.map(item => <TableRow><TableCell>{item.StudentId}</TableCell>
                    <TableCell >{item.StudentFirstName}</TableCell>
                    <TableCell>{item.StudentLastName}</TableCell>
                    <TableCell>{item.StatusOfPreparation ? <CheckIcon>check</CheckIcon>
                        : <CloseIcon>close</CloseIcon>}</TableCell>
                         
                </TableRow>
                )
                }
            </TableBody>
        </Table>
    )


}

export default StatusesStudentList;