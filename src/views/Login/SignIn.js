import React, {useContext, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Get1 } from '../../Requests';
import SignUp from './SignUp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";
  import SearchStudents from '../SearchStudents';
import AppContext from '../../context';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({history}) {
  const classes = useStyles();
  const [state,setState] = useState({name:"",password:""});
  //const [state,setState] = useState({teacher:[]});
  const context = useContext(AppContext);

const handleChange = (e)=>{
    setState(prevState=>({...prevState,[e.target.name]:e.target.value}))
}
const handleSubmit = async (e)=>{
  e.preventDefault();
    try {
       let response = await Get1(`Teacher/Get?name=${state.name}&password=${state.password}`);

       if(response!=null)    
       {
        context.updateUser(response)
        history.push("/main_menu")
       } 
       else
       history.push("/sign_up")
    }
    catch {}
}

const Return=()=>{
  history.push("/first")
}
      
         return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* if (flag=0) { */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="שם משתמש"
            type="text"
            name="name"
            autoComplete="current-name"
            //autoFocus
           value={state.firstName}
            onChange={handleChange}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמא"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="תזכור אותי"
          />
           <button onClick={Return}>לחזרה</button>
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
               ?שכחת סיסמא
              </Link>
            </Grid>
            <Grid item>
                
                <Link to="/sign_up" variant="body2">
                {"?אין לך חשבון Sign Up"}
              </Link>
             
            </Grid>
          </Grid>
        </form>
      </div>
      
    {/* } 
    else
    <SearchStudents></SearchStudents> {/* <Box mt={8}> */}
        {/* <Copyright />
      </Box> */}
    </Container>
  );
}