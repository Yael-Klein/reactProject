// import * as React from 'react';
import { DataGrid , GridToolbar} from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import React, { useState, useContext, useEffect } from "react"
import { Get1 } from "../../Requests";
import AppContext from '../../context';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StudentHW from '.';
import Hw from '../Hw';
import { List } from '@material-ui/core';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Question from './Question';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();
//   //  console.log(row)
//   //  debugger
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
//                       {/* <TableCell align="right">{historyRow}</TableCell> */}
//                       {/* <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                      </TableCell>  */}
//                     </TableRow>
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

// const columns = [
//   //<button>jj</button>,
//   {
//     //field: 'date',
//     headerName: 'עשיתי שיעורי בית!',
//     renderCell: (params) => (
//       <strong>
//         {/* {params.value.getFullYear()} */}
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           style={{ marginLeft: 16 }}
//           onClick={p()}
//         >
//           Open
//         </Button>
//       </strong>
//     ),
//   },
//   {
//     field: 'HwDate',
//     headerName: 'תאריך',
//     width: 150,
//     type: 'date',
//     editable: true,
//     direction: 'rtl', marginRight: 200
//   },
//   {
//     field: 'HwDescription',
//     headerName: 'שיעורי הבית',
//     type: 'text',
//     width: 150,
//     editable: true,
//     //checkboxSelection:false
//     // rowGroup:true,

//   },
//   {
//     field: 'Deadline',
//     headerName: 'מועד סיום הכנת ש"ב',
//     width: 250,
//     type: 'date',
//     editable: true,
//     direction: 'rtl',
//   },
//   {
//     field: 'professionDescription',
//     headerName: 'מקצוע',
//     width: 150,
//     editable: true,
//     direction: 'rtl',

//   },
//   {
//     field: 'DurationOfPreparation',
//     headerName: 'משך זמן ההכנה במשוער',
//     width: 150,
//     editable: true,
//     direction: 'rtl',
//   },
//   {
//     field: 'VerificationQuestion',
//     headerName: 'שאלת אימות',
//     width: 150,
//     editable: true,
//     direction: 'rtl',
//     hide: true,
//     lockVisible:true
//   },
//   {
//     field: 'VerificationAnswer',
//     headerName: 'תשובת אימות',
//     width: 150,
//    // type: 'input',
//     editable: true,
//     direction: 'rtl',
//     hide: true,
//     lockVisible:true
//   },
 
// ];

export default function StudentHomeW({history}) {

  const columns = [
    //<button>jj</button>,
    {
      field: 'id',
      width: 150,
      headerName: 'עשיתי שיעורי בית!',
      renderCell: (params) => (
        <strong>
          {/* {params.value.getFullYear()} */}
          <Button
           type="submit"
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={p}
            //onClick={Question}
          >
            Open
          </Button>
        </strong>
      ),
    },
    {
      field: 'HwDate',
      headerName: 'תאריך',
      width: 150,
      type: 'date',
      editable: true,
      direction: 'rtl', marginRight: 200
    },
    {
      field: 'HwDescription',
      headerName: 'שיעורי הבית',
      type: 'text',
      width: 150,
      editable: true,
      //checkboxSelection:false
      // rowGroup:true,
  
    },
    {
      field: 'Deadline',
      headerName: 'מועד סיום הכנת ש"ב',
      width: 250,
      type: 'date',
      editable: true,
      direction: 'rtl',
    },
    {
      field: 'professionDescription',
      headerName: 'מקצוע',
      width: 150,
      editable: true,
      direction: 'rtl',
  
    },
    {
      field: 'DurationOfPreparation',
      headerName: 'משך זמן ההכנה במשוער',
      width: 150,
      editable: true,
      direction: 'rtl',
    },
    {
      field: 'VerificationQuestion',
      headerName: 'שאלת אימות',
      width: 150,
      editable: true,
      direction: 'rtl',
      hide: true,
      lockVisible:true
    },
    {
      field: 'VerificationAnswer',
      headerName: 'תשובת אימות',
      width: 150,
     // type: 'input',
      editable: true,
      direction: 'rtl',
      hide: true,
      lockVisible:true
      
    },
   
  ];


  const context = useContext(AppContext);
  const [state, setState] = useState({ studentList: [] });
  const [item, setItem] = useState({studentList:[0]}) 

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
  // const findItem = (id) =>{
  //   var newItem = state.studentList.find(x=>x.id === id)
  //   setItem(newItem)
  // };
  const p=()=>{
   history.push({
    pathname: './question',
    state: { detail:state.studentList }
    
  })

  }

//   const PostPanel = ({ id, record, resource }) => (
//     <div dangerouslySetInnerHTML={{ __html: record.body }} />
// );

// const PostList = props => (
//     <List {...props}>
//         <DataGrid expand={<PostPanel />}>
//             <TextField source="id" />
//             <TextField source="title" />
//             <DateField source="published_at" />
//             <BooleanField source="commentable" />
//             <NumberField source="views" />
//             <EditButton />
//             <ShowButton />
//         </Datagrid>
//     </List>
// )



  return (

    <div style={{ height: 400, width: '85%', marginLeft: 100, marginTop: 100, direction: 'rtl', textAlign: "right" }}>
      <h2>מטלות שיעורי הבית להיום</h2>
      {/* <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="עשיתי את שיעורי הבית!">
        <TreeItem nodeId="2" label="bbb" />
        <TreeItem nodeId="3" label="ccc" />
        <TreeItem nodeId="4" label="ddd" />
      </TreeItem>
      {/* <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem> */}
    {/* </TreeView> */} 
      <DataGrid  
      
        components={{
          Toolbar: GridToolbar,
        }}
        disableSelectionOnClick={handleSubmit()}
        rows={state.studentList.map((item, index) => {
          <Question {...item}/>
        //  p(index)
          return { ...item, 
            id: index  }
        })}
        columns={columns}
        pageSize={5}
      checkboxSelection
     
      />
<div id="d" ></div>
    </div>
  );
}



//  import React, { useState, useContext, useEffect } from "react"
// import Paper from '@material-ui/core/Paper';
// import { RowDetailState } from '@devexpress/dx-react-grid';
// import {
//   Grid,
//   Table,
//   TableHeaderRow,
//   TableRowDetail,
// } from '@devexpress/dx-react-grid-material-ui';
// import { Get1 } from "../../Requests";
//  import AppContext from '../../context';



// const RowDetail = ({ row }) => (
//   <div>
//     Details for
//     {' '}
//     {row.name}
//     {' '}
//     from
//     {' '}
//     {row.city}
//   </div>
// );

// export default function StudentHomeW({history}) {

//   useEffect(()=>{
//     if(context.user.studentId)
//     handleSubmit();
//  },[context.user.studentId])
//   const context = useContext(AppContext);
//   const [state, setState] = useState({ studentList: [] });
//   const [item, setItem] = useState({studentList:[0]}) 
//   const handleSubmit = async (e) => {
//     try {
//       let response = await Get1(`Student/GetHw?id=${context.user.studentId}`);
//       if (Array.isArray(response)) {
//         setState({ studentList: response })
//       }
//     }
//     catch {
//       console.log("there is problem")
//     }
//   };
//   const columns = [
//     //<button>jj</button>,
//     {
//       field: 'id',
//       width: 150,
//       headerName: 'עשיתי שיעורי בית!',
//       renderCell: (params) => (
//         <strong>
//           {/* {params.value.getFullYear()} */}
//           {/* <Button
//            type="submit"
//             variant="contained"
//             color="primary"
//             size="small"
//             style={{ marginLeft: 16 }}
//            // onClick={p}
//             //onClick={Question}
//           >
//             Open
//           </Button> */}
//         </strong>
//       ),
//     },
//     {
//       field: 'HwDate',
//       headerName: 'תאריך',
//       width: 150,
//       type: 'date',
//       editable: true,
//       direction: 'rtl', marginRight: 200
//     },
//     {
//       field: 'HwDescription',
//       headerName: 'שיעורי הבית',
//       type: 'text',
//       width: 150,
//       editable: true,
//       //checkboxSelection:false
//       // rowGroup:true,
  
//     },
//     {
//       field: 'Deadline',
//       headerName: 'מועד סיום הכנת ש"ב',
//       width: 250,
//       type: 'date',
//       editable: true,
//       direction: 'rtl',
//     },
//     {
//       field: 'professionDescription',
//       headerName: 'מקצוע',
//       width: 150,
//       editable: true,
//       direction: 'rtl',
  
//     },
//     {
//       field: 'DurationOfPreparation',
//       headerName: 'משך זמן ההכנה במשוער',
//       width: 150,
//       editable: true,
//       direction: 'rtl',
//     },
//     {
//       field: 'VerificationQuestion',
//       headerName: 'שאלת אימות',
//       width: 150,
//       editable: true,
//       direction: 'rtl',
//       hide: true,
//       lockVisible:true
//     },
//     {
//       field: 'VerificationAnswer',
//       headerName: 'תשובת אימות',
//       width: 150,
//      // type: 'input',
//       editable: true,
//       direction: 'rtl',
//       hide: true,
//       lockVisible:true
      
//     },
   
//   ];

//   //const [rows] = useState(generateRows({ length: 8 }));

//   return (
//     <Paper>
//       <Grid
//      // disableSelectionOnClick={handleSubmit()}
//       rows={state.studentList.map((item, index) => {
//         return { ...item, 
//           id: index  }
//       })}
//       // rows={rows}
//         columns={columns}
//       >
//         <RowDetailState
//           defaultExpandedRowIds={[2, 5]}
//         />
//         <Table />
//         <TableHeaderRow />
//         <TableRowDetail
//           contentComponent={RowDetail}
//         />
//       </Grid>
//     </Paper>
//   );
// };




