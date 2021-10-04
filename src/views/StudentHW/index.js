// import { DataGrid } from '@material-ui/data-grid';
// import React, { useState, useContext, useEffect } from "react"
// import { Get1 } from "../../Requests";
// import AppContext from '../../context';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


// const useRowStyles = makeStyles({
//   root: {
//     '& > *': {
//       borderBottom: 'unset',
//     },
//   },
// });

// export default function StudentHW(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();
// //  console.log(row)
// //  debugger
//   return (
    
//     <React.Fragment>
//       <TableRow className={classes.root}>
//         <TableCell>
//           <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         {/* <TableCell component="th" scope="row">
//           {row.}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell> */}
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               <Typography variant="h6" gutterBottom component="div">
//                 שאלת אימות
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     {/* <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell> */}
//                     {/* <TableCell align="right">Amount</TableCell> */}
//                     <TableCell align="right">שאלת אימות</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.map((historyRow) => (
//                     <TableRow key={historyRow.HwDate}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.HwDate}
//                       </TableCell>
//                       <TableCell>{historyRow.professionDescription}</TableCell>
//                       <TableCell align="right">{historyRow.professionDescription}</TableCell>
//                      {/* <TableCell align="right">{historyRow}</TableCell> */}
//                       {/* <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                      </TableCell>  */}
//                    </TableRow>
//                   ))} 
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }


//import react from 'react'
import Question from './Question'
import StudentHomeW from './StudentHomeW'
import React, { useState, useContext, useEffect } from "react"
import { Get1 } from "../../Requests";
import AppContext from '../../context';

export default function StudentHW()
{
  const context = useContext(AppContext);
  const [state, setState] = useState({ studentList: [] });
  const handleSubmit = async (e) => {
    try {
      let response = await Get1(`Student/GetHw?id=${context.user.studentId}`);
      if (Array.isArray(response)) {
        setState({ studentList: response })
      }
    }
    catch {
      console.log("there is problem")
    }
  };
  return(
  <>
  {/* state.studentList.map((item, index) => {
          <Question {...item}/>
        //  p(index)
          return { ...item, 
            id: index  }
        }) */}
        {/* <div>
          {state.studentList.map(item=> {return{...<Question prop={item}></Question>}})}
        </div> */}
  <StudentHomeW></StudentHomeW>
  <Question></Question>
  </>
  )
}