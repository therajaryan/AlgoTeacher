import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  rootto: {
    width: 500,
    marginLeft:'300px',
    
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
 
  margin: {
    marginTop:'300px',
    marginLeft: '300px',
  },
}));

const Slide = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


const marks = [
  {
    value: 25,
    label: 'Bubble Sort',
  },
  {
    value: 50,
  label:"Insertion Sort"  
},
  {
    value: 75,
  label: "Merge Sort"  
},
  {
    value: 100,
    label: 'Quick Sort',
  }
];

function valuetext(value) {
  return `${value}`;
}
function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}


export default function DiscreteSlider() {
  const classes = useStyles();

  

  const [step,setStep] = React.useState(0);


  React.useEffect(() => {
    setStep((parseInt(localStorage.getItem('stops'))+1)*25);
  })

  return (
    <div className={classes.root}>
      {/* <Typography id="discrete-slider-always" >
     
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      /> */}
      <Typography id="discrete-slider-restrict" >
  Restricted
</Typography>
<Slide
style={{marginTop:"10%", width: "90%", marginLeft: "5%",height:"5%"}}
  defaultValue={0}
  value = {step ? step : 0}
  valueLabelFormat={valueLabelFormat}
  getAriaValueText={valuetext}
  aria-labelledby="discrete-slider-restrict"
  step={25}
  valueLabelDisplay="auto"
  marks={marks}
/>
    </div>
  );
}
