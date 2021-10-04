import React, { useState }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ControlledOpenSelect from "./ControlledOpenSelect";
import { Post1 } from '../../Requests';

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

export default function Enter() {
  const classes = useStyles();

  const [state, setState] = useState({
    // enterHW: [
    //   {
        studyClassId:1,
        hwDescription: "",
        hwToStydyClassOnDate_Date: "",
        deadline: "",
        durationOfPreparation: "",
        verificationQuestion: "",
        verificationAnswer: ""
    //   }
    // ]
  }
  );
  const handleChange = (e) => {
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async () => {
    debugger;
    try {
      let response = await Post1(`Teacher/PostHw`,state);
      setState({ enterHW: response })
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
          הכנסת שיעורי בית
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} style={{ marginLeft:80, direction: 'rtl'}}>
              <ControlledOpenSelect></ControlledOpenSelect>
            </Grid>


            {/* <Grid item xs={12} sm={6}> */}
            <TextField
              // autoComplete="description"
              // name="description"
              // variant="outlined"
              // required
              // fullWidth
              // id="description"
              // label="תאור שיעורי הבית"
              // autoFocus
              // onChange={handleChange}
               variant="outlined"
                required
                fullWidth
                name="hwDescription"
                label="תאור שיעורי הבית"
                id="hwDescription"
                autoComplete
                onChange={handleChange}
            />
            {/* </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="hwToStydyClassOnDate_Date"
                label="תאריך"
                name="hwToStydyClassOnDate_Date"
                autoComplete="hwToStydyClassOnDate_Date"
                type="date"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="deadline"
                label="מועד סיום"
                name="deadline"
                autoComplete="deadline"
                type="date"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="durationOfPreparation"
                label="משך זמן הכנה"
                id="durationOfPreparation"
                autoComplete
                type="number"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="verificationQuestion"
                label="שאלת אימות"
                id="verificationQuestion"
                autoComplete
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="verificationAnswer"
                label="תשובה לשאלת האימות"
                id="verificationAnswer"
                autoComplete
                type="number"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            הוסף
          </Button>
        </form>
      </div>

    </Container>
  );
}