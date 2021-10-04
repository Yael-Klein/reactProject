// import React, { useContext, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';
// import { Get1 } from '../../Requests';
// import AppContext from '../../context';
// import makeAnimated from 'react-select/animated';


// const useStyles = makeStyles((theme) => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// export default function ControlledOpenSelect() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//    const [c,setC] = React.useState({classesList:[] });
//    const [value,setValue] = React.useState();
//    const context = useContext(AppContext);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = async(e) => {
//     // e.preventDefault();
//     try {
//      let response =await Get1(`StudyGroup/Get?password=${context.user.teacherId}`);
     
//        if(Array.isArray(response))
//        {
//           setC({classesList:response })
//            setOpen(true);
//           //  console.log(c.classesList);
//         }
//       }
//       catch {}
//   };

//   useEffect(()=>{
//     if(context.user.teacherId)
//     handleOpen();
//   },[context.user.teacherId])

//   const handleChange = (event) => {
//     debugger
//     setValue(event.target.value);
//   };
//   return (
//     <div>
      
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-controlled-open-select-label">בחר/י כיתה</InputLabel>
//         {/* <Select
//           // labelId="demo-controlled-open-select-label"
//           // id="demo-controlled-open-select"
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           // open={open}
//           //onClose={handleClose}
//           // onOpen={handleOpen}
//           // onChange={(e)=>{debugger; setValue(e.target.value);}}
//           onChange={handleChange}
//           value={value}
//         >  */}
//            <Select
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={value}
//           onChange={handleChange}
//           autoWidth
//           isMulti
//           components={animatedComponents}
//         >
//           {/* </Select> */} 
          
//             {/* {c.classesList.map(item=><MenuItem>
//                                   <MenuItem value={item}>{item}</MenuItem>
//                                    </MenuItem>
//                      )
//           }   */}
//           <MenuItem value={20}>dd</MenuItem>
//           <MenuItem value={30}>rr</MenuItem>
//           <MenuItem value={40}>yy</MenuItem>

//         </Select>
//       </FormControl>
//     </div>
//   );
// }


// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// import React, { useContext, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// // import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';
// import { Get1 } from '../../Requests';
// import AppContext from '../../context';
// // import makeAnimated from 'react-select/animated';
// // import { colourOptions } from '../data';

// const animatedComponents = makeAnimated();

// export default function ControlledOpenSelect() {
  
//   const [open, setOpen] = React.useState(false);
//     const [c,setC] = React.useState({classesList:[] });
//     // const [value,setValue] = React.useState();
//     const context = useContext(AppContext);
//   const handleOpen = async(e) => {
//         try {
//          let response =await Get1(`StudyGroup/Get?password=${context.user.teacherId}`);
         
//            if(Array.isArray(response))
//            {
//               setC({classesList:response })
//                setOpen(true);
//             }
//           }
//           catch {}
//       };
//      const full=async()=>{
//        debugger;
//       c.classesList.map(item=><MenuItem>
//         <MenuItem value={item}>{"item"}</MenuItem>
//             </MenuItem>
// )
//      }
//       useEffect(()=>{
//      if(context.user.teacherId)
//      handleOpen();
//   },[context.user.teacherId])
//   return (
//     <div>
//       <Select>
//      {/* <Select */}
//     {/* //   closeMenuOnSelect={false}
//     //   // components={animatedComponents}
//     //   components={c.classesList}
//     //   // defaultValue={[colourOptions[4], colourOptions[5]]}
//     //   isMulti
//     //   // value={c.classesList}
//     //   options={full}
//     // /> */}
//     <Select
//       closeMenuOnSelect={false}
//       components={animatedComponents}
//       defaultValue={[c.classesList[0]]}
//       isMulti
//       options={c.classesList.map(item=>
//         <MenuItem value={item}>{item}</MenuItem>
//        ) }
//     />
//     {/* /* <Select
//               // labelId="demo-simple-select-autowidth-label"
//               // id="demo-simple-select-autowidth"
//               isMulti
//               components={animatedComponents}
//               autoWidth
//            />
//                 {c.classesList.map(item=><MenuItem>
//                                       <MenuItem value={item}>{item}</MenuItem>
//                                        </MenuItem>
//                          )
//               }  
//               </Select> */} 
//               </Select>
//               </div>

    
//   );
// }



/* eslint-disable no-use-before-define */
// import React from 'react';
import Chip from '@material-ui/core/Chip';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { Autocomplete } from '@material-ui/lab';
 import { Get1 } from '../../Requests';
 import AppContext from '../../context';
 import React, { useContext, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    direction:'rtl',
    width: 200,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));


export default function ControlledOpenSelect() {

    const [open, setOpen] = React.useState(false);
    const [c,setC] = React.useState({classesList:[] });
    // const [value,setValue] = React.useState();
    const context = useContext(AppContext);
  const handleOpen = async(e) => {
        try {
         let response =await Get1(`StudyGroup/Get?password=${context.user.teacherId}`);
           if(Array.isArray(response))
           {
              setC({classesList:response })
               setOpen(true);
            }
          }
          catch {}
      };
   const classes = useStyles();

   useEffect(()=>{
          if(context.user.teacherId)
         handleOpen();
       },[context.user.teacherId])
  return (
    <div 
    className={classes.root}
    >
      <Autocomplete
        multiple
        id="tags-standard"
        options={c.classesList.map((option) => option)}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="בחר/י כיתות"
          />
        )}
      />
      {/* <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      /> */}
      {/* <Autocomplete
        multiple
        id="tags-filled"
        options={top100Films.map((option) => option.title)}
        defaultValue={[top100Films[13].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />
        )}
      /> */}
    </div>
  );
}

