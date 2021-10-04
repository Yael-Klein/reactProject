import React, { useState } from 'react';
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
import { Post1 } from '../../Requests';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({history}) {
  const classes = useStyles();
  const [state, setState] = useState({
    // teacher: [
    //   {
       // teacherId:10,
        teacherTz: "",
        teacherFirstName: "",
        teacherLastName: "",
        teacherPel: "",
        teacherEmail: "",
        teacherPassword: ""
    //   }
    // ]
  });
  const handleChange = (e) => {

    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    console.log(state.teacher)
    e.preventDefault();
    try {
   Post1(`Teacher/Post`, state).then(response=>{
      debugger
     if(response==1)
       {
         history.push("/first_menu")
       } 
        else 
        history.push("/first")
      });
    }
    catch { }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6}> */}
          <TextField
            autoComplete="tz"
            name="teacherTz"
            variant="outlined"
            required
            fullWidth
            id="teacherTz"
            label="TZ"
            margin="normal"
            autoFocus
            value={state.teacherTz}
            onChange={handleChange}
          />
          {/* </Grid>
        
            <Grid item xs={12} sm={6}> */}
          <TextField
            autoComplete="fname"
            name="teacherFirstName"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            id="teacherFirstName"
            label="First Name"
            autoFocus
            value={state.teacherFirstName}
            onChange={handleChange}
          />
          {/* </Grid>
            <Grid item xs={12} sm={6}> */}
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="teacherLastName"
            margin="normal"
            autoComplete="lname"
            value={state.teacherLastName}
            onChange={handleChange}
          />
          {/* </Grid>
            <Grid item xs={12} sm={6}> */}
          <TextField
            variant="outlined"
            required
            fullWidth
            id="phone"
            label="phone"
            name="teacherPel"
            margin="normal"
            autoComplete="phone"
            value={state.teacherPel}
            onChange={handleChange}
          />
          {/* </Grid>
            <Grid item xs={12}> */}
          <TextField
            variant="outlined"
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="teacherEmail"
            autoComplete="email"
            value={state.teacherEmail}
            onChange={handleChange}
          />
          {/* </Grid>
            <Grid item xs={12}> */}
          <TextField
            variant="outlined"
            required
            fullWidth
            margin="normal"
            name="teacherPassword"
            label="Password"
            type="password"
            id="teacherPassword"
            autoComplete="current-password"
            value={state.teacherPassword}
            onChange={handleChange}
          />
          {/* </Grid>
          </Grid> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid >
            <Grid item>
                <Link to="/sign_in" variant="body2">
                  Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}