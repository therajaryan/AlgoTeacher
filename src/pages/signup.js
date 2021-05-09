import React from 'react';
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
import { SettingsOverscanRounded } from '@material-ui/icons';
import { Base64 } from 'js-base64';
import { useHistory } from 'react-router';


// const Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    // marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  space:{
      margin:"10%",
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const history1 = useHistory();
  const shoot1 = () => {
    history1.push('/signin');
 };

  const [name,setName] = React.useState('');
  const [org,setOrg] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [pass,setPass] = React.useState('');
  const [conPass,setConPass] = React.useState('');
  const [phoneNo,setPhone] = React.useState('');


  const signUp = () => {
    
      if(name && email && pass && conPass)
      {
        
          if(pass == conPass){
            let data = {
                "Name" : name,
                
                "Email": email,
                
                "Password": pass,
                
                "Type" : "User"
            };

            data = Base64.encode(JSON.stringify(data));
            
          fetch('http://192.168.1.8:5000/insert/userLogin/'+data)
          .then(result => result.json())
          .then(resultJson => {
              if(resultJson.status =="Success"){
                alert("Sign Up Successful");
                history.push("/home");
              }
          })
          .catch(err => alert(err))

          
        }
        else{
          alert("Entered Passwords do not match")
        }
      }
      else{
          alert("Please enter the details correctly");
      }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5" paddingTop="150px">
          Sign up
        </Typography>
        <br/>
        {/* <Typography component="h5">
            This login is on behalf of the whole organisation. Only Admins are allowed to sign up here. Other peoples associated with the organisation shall login only on the addition of Admin to the organisation
        </Typography> */}
        <br/>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                value = {name}
                label="Name"
                autoFocus
                onChange = {(na) => {setName(na.target.value)}}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              /> */}
            {/* </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email}
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                onChange = {(em)=>{setEmail(em.target.value)}}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                value={pass}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(pa) => {setPass(pa.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="con-password"
                label="Confirm Password"
                value={conPass}
                type="password"
                id="con-password"
                autoComplete="current-password"
                onChange = {(pa) => {setConPass(pa.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" required/>}
                label="I accept the Terms & Conditions"
              /> */}
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            <Link onClick={()=> shoot1()} variant="body2">
                Already have an account? Sign in!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}