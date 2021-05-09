import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import { LeakRemoveRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
    paddingBottom: '150px',
    paddingTop: '20px',
    paddingRight: '40px',
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const [post1,setPost1] = React.useState('');
  const [post2,setPost2] = React.useState('');
  const [post3,setPost3] = React.useState('');
  const [post4,setPost4] = React.useState('');

  const { posts, title, index } = props;
  const [p, setp] = React.useState(''); 
  const [A,setA] = React.useState(false); 
  const [i, seti]= React.useState('');

  React.useEffect(() => {
    console.log(posts);

    // let a = [...p];

    // posts.forEach(element => {
    //   // let a = [...p];
    //   fetch(element)
    //   .then(res => res.text())
    //   .then(md => { 
    //     a.push(md.toString());
    //    })
    // });
    // setp(a)
    // if(p){
    //   setA(true);
    // }
    fetch(posts[0])
      .then(res => res.text())
      .then(md => { setPost1(md) })  
      fetch(posts[1])
      .then(res => res.text())
      .then(md => { setPost2(md) })
      fetch(posts[2])
      .then(res => res.text())
      .then(md => { setPost3(md) })
      fetch(posts[3])
      .then(res => res.text())
      .then(md => { setPost4(md) })
    let d ;
    if(index == 0){
       d = post1;
    }
    else if(index == 1){
       d = post2;
    }
    else if(index == 2){
       d = post3;
    }
    else if(index == 3){
       d = post4;
    }
    seti(d)
  })

  
  console.log(p);
  console.log(index);



  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {i ? (
         <Markdown className={classes.markdown} key={i.substring(0,40)}>
           {i}
       </Markdown>): null}
       
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};