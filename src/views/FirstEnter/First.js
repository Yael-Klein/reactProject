import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function First({history}) {
  const classes = useStyles();

  const Teacher=()=>
  {
    history.push("/sign_in")
  }
 function Student(e)
  {
    history.push("/sign_in_s")
  }
  return (
    
    <div className={classes.root} >
     
      <Button variant="contained"
       color="primary" 
       onClick={Teacher}>
        מורה
      </Button>
      <Button variant="contained" 
      color="secondary" 
       onClick={Student}>
        תלמיד
      </Button>
    </div>
  );
}
