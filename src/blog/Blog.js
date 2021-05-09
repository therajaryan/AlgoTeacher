import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import MainFeaturedPost from './MainFeaturedPost';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import post4 from './blog-post.4.md';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 250,
    width: '100%',
    marginTop: '40px',
  },
  image: {
    position: 'relative',
    height: 50,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.75,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: 'none',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: .9,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.grey,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  // title: 'Title of a longer featured blog post',
  // description:
  //   "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'linear-gradient(red, green, blue)',
  // imgText: 'main image description',
  // linkText: 'Continue reading…',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

const posts = [post1, post2, post3, post4];

const sidebar = {
  title: 'About',
  description:
    'Algorithms made easy.',
  archives: [
    // { title: 'March 2020', url: '#' },
    // { title: 'February 2020', url: '#' },
    // { title: 'January 2020', url: '#' },
    // { title: 'November 1999', url: '#' },
    // { title: 'October 1999', url: '#' },
    // { title: 'September 1999', url: '#' },
    // { title: 'August 1999', url: '#' },
    // { title: 'July 1999', url: '#' },
    // { title: 'June 1999', url: '#' },
    // { title: 'May 1999', url: '#' },
    // { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    // { name: 'Twitter', icon: TwitterIcon },
    // { name: 'Facebook', icon: FacebookIcon },
  ],
};
const images = [
  {
    // url: '/static/images/grid-list/breakfast.jpg',
    title: 'Visualize',
    width: '60%',
    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwe7.com%2Fcoding-wallpapers%2F6%2F&psig=AOvVaw1F6vILlk6Ya_B2LkKNonps&ust=1620139136701000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiR-eferfACFQAAAAAdAAAAABAE'
  },  
];


export default function Blog() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
    
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
        
          <MainFeaturedPost post={mainFeaturedPost} />
         
          <Grid className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          onClick={()=>{window.location.href='/visualisation'}}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))} 
           <button style={{width:'60px', marginLeft: '40px', color:'white', backgroundColor: 'black', marginBottom:'0px'}} onClick={()=>{
            if(index == 3){
              setIndex(0);
            }
            setIndex(index+1)}}>Next</button>
      
     
      </Grid>
     
       
            {/* {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
         
          
          <Grid container spacing={1} className={classes.mainGrid}>
            
            <Main title="" posts={posts} index = {index}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        
      </Container>
      <Footer title="Happy Coding!" description="" />
    </React.Fragment>
  );
}
