import React,{Component} from 'react';
import './App.css';
import Header from './sorterpainting/Header.js'
import './sorterpainting/sorting.css';
import * as mergersortalgorithm from './sortingalgo/mergesort.js'
import * as bubblesortalgorithm from './sortingalgo/bubblesort.js'
import * as insertionsortalgorithm from './sortingalgo/insertionsort.js'
import * as quicksortalgorithm from './sortingalgo/quicksort.js'



const COLOR1 = '#4281ff';
const COLOR2 = 'black';
const COLOR3 = 'blue';
var noofbars = 40;
var speed = 1;
var height = 500;
var width = 10;
var updater;
var inmiddle = -1;
var stopflag = 0;



class App extends Component
{

  state =
  {
    array  : []
  }

  componentDidMount = () =>
  {
    this.createarray(noofbars);
  }
  //creating new array 
  createarray = (a) => 
  {
    clearInterval(updater);
    var viewportWidth  = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;
    height = viewportHeight - 250;  
    inmiddle = -1;
    var array1 = [];
    noofbars = a;
    width = viewportWidth/noofbars - 2;
    for(var i=0;i<noofbars;i++)
    {
      array1.push(Math.floor((Math.random() * height) + 30));
    }
    this.setState({array : array1});
    
  }


  //change animation speed
  changespeed = (i)=>
  {
    speed = (100-i)*10;
  }

  //sort app main funcion ------------------------------------
  sortapp = (id) =>
  {
    stopflag = 0;
    var temparr = Array.from(this.state.array);
    var ite;
    var ans;
    const bar_class = document.getElementsByClassName('singlebar');
    ite = 0;
    if(id === 0)
    {
      ans = mergersortalgorithm.mergesort(temparr);
    }
    else if(id === 1)
    {
      ans = bubblesortalgorithm.bubblesort(temparr);
    }
    else if(id === 2)
    {
      ans = insertionsortalgorithm.insertionsort(temparr);
    }
    else if(id === 3)
    {
      ans = quicksortalgorithm.quicksort(temparr);
    }
    if(inmiddle !== -1)
    {
      ite = inmiddle;
    }

    // for(const ite in ans)
    // {
    //   const comparition = ans[ite];
    //   if(comparition[2] === 0 || comparition[2] === 2)
    //   {
    //     let color;
    //     const bar1 = bar_class[comparition[0]];
    //     const bar2 = bar_class[comparition[1]];
    //     if(comparition[2] === 0)
    //       color = COLOR2;
    //     else
    //       color = COLOR1;
    //     setTimeout(() => 
    //       {
    //         bar1.style.backgroundColor = color;
    //         bar2.style.backgroundColor = color;
    //       }
    //     ,ite*speed);
    //   }
    //   else
    //   {
    //     const bar1 = bar_class[comparition[0]];
    //     //const text1 = text[comparition[0]];
    //     setTimeout(() => 
    //       {
    //         //console.log(text1.value);
    //         bar1.style.height = `${comparition[1]}px`;
    //         //text1.innerText = comparition[1].toString();
    //         //console.log(text1.value);
    //       }
    //     ,ite*speed);
    //   }
    // }
    
    var n = ans.length;
     updater = setInterval(()=>
    {
      console.log(speed);
      if(ite === n)
      {
        this.setState({array : temparr});
        inmiddle = -1;
        //console.log(ite+" "+"dfjalskdjfasd"+finishflag);
        clearInterval(updater);
        return;
      }
      if(stopflag === 1)
      {
        const comparition = ans[ite];
        if(comparition[2] === 2)
        {
          let color;
          const bar1 = bar_class[comparition[0]];
          const bar2 = bar_class[comparition[1]];
          color = COLOR1;
          bar1.style.backgroundColor = color;
          bar2.style.backgroundColor = color;
          ite++;
        }
      
        inmiddle = ite;
        stopflag = 0;
        clearInterval(updater);
        return;
      }
      const comparition = ans[ite++];
     
      if(comparition[2] === 0 || comparition[2] === 2)
      {
        let color;
        const bar1 = bar_class[comparition[0]];
        const bar2 = bar_class[comparition[1]];
        if(comparition[2] === 0)
          color = COLOR2;
        else
          color = COLOR1;
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
      }
      else
      {
        const bar1 = bar_class[comparition[0]];      
        bar1.style.height = `${comparition[1]}px`;  
      }
    },speed);


    //console.log(finishflag);

  }

  stop = () =>
  {
    stopflag = 1;
  }
  // render
  render()  
  {
    return (
      <div className = "App">
        <Header sortapp = {this.sortapp} setflag = {this.setflag} createarray = {this.createarray} changespeed = {this.changespeed} stop = {this.stop}/>
        <div className = "barcontainer" style={{display : 'fill', flexDirection : 'row', justifyContent : 'center', backgroundColor:'#'}}>
          {this.state.array.map((value,idx) => 
            (
              <div key = {idx} className = "singlebar" style={{height : `${value}px`, width : `${width}px`, backgroundColor : COLOR1}}>
              </div>)
            )}
          </div>
      </div>
      
    );
  }


 
}





export default App;
