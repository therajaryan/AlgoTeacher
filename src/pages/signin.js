import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { Base64 } from 'js-base64';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'radial-gradient(red, cyan, purple)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(12, 4),
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


export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();
  const shoot = () => {
    history.push('/sign-up');
 };

 const [user,setUser] = React.useState('');
  const [pass,setPass] = React.useState('');

  const login = () =>{
    let data = {
      Email: user,
      Password: pass,
    };
    data = Base64.encode(JSON.stringify(data));
    fetch('http://192.168.1.8:5000/login/userLogin/'+data)
    .then(result => result.json())
    .then(resultJson => {
      if(resultJson.status == "Success"){
        localStorage.setItem('login',true);
        // alert(JSON.stringify(resultJson.data));
        localStorage.setItem('loginCredentials',JSON.stringify(resultJson.data)); 
        window.location.href= '/home';
      }
      else{
        alert("Plese enter correct credentials.");
      }
    })

  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.submit}
            onClick = {login}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value = {user}
              onChange = {(e) => setUser(e.target.value)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value = {pass}
              onChange = {(e) => setPass(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
          </form>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {()=>login()}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
              <Link variant="body2" onClick={()=> shoot()}>Don't have an account? Sign Up!</Link>
                
              </Grid>
            </Grid>
        </div>
      </Grid>
    </Grid>

  );
  
}
