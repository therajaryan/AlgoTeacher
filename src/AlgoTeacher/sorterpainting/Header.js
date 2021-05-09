import React,{Component} from 'react';
//import  './sorting.css';
import './jsforslider.js';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './../../components/Navbar/NavbarElements';

class Header extends Component
{
    onclick = () =>
    {
        const slider = document.getElementById("myRange1");
        this.props.createarray(slider.value);
    }

    onchange = () =>
    {
        const val = document.getElementsByClassName("dropdownbox");
        //console.log(val[0].value);
        if(val[0].value === 'merge')
            this.props.sortapp(0);
        else if(val[0].value === 'bubble')
            this.props.sortapp(1);
        else if(val[0].value === 'insertion')
            this.props.sortapp(2);
        else if(val[0].value === 'quick')
            this.props.sortapp(3);
    }

    oninput = (e) =>
    {
        this.props.createarray(e.target.value);
    }

    changespeed = (e)=>
    {
        console.log(e.target.value);
        this.props.changespeed(e.target.value);
    }

    stop = () =>
    {
        this.props.stop();
    }
//b80000
    render()
    {
        return (
            <div className="Header" >
                <header style = {headStyle}>
                    <h1  style={{flexGrow : '1',fontFamily : 'ariel'}}><font face='helvetica' color = '#000'></font> <font face='helvetica' color = '#000'></font></h1>
                    <div style = {{flexGrow : '2',display : 'flex', alignItems : 'center' ,flexDirection : 'row', justifyContent:'flex-end'}}>
                        {/* <div className="slidecontainer" style={sliderstyle}>
                            <input type="range" min="99" max="99" onInput={this.changespeed} className="slider" id="myRange2"  polyfill = "false"></input>
                        </div> */}
                        {/* <NavLink to='/home'> */}
                        <a href='/home'><img  src={require('./logo.png')} alt='logo' width='100px' height='90px' style={{marginRight: '100px'}} />
                        </a>
                        
                        <button type="button" style = {btn1} onClick = {this.onclick}>Create Array</button>
                        <select className = 'dropdownbox' style={btn2}>
                            <option value="merge">Merge</option>
                            <option value="bubble">Bubble</option>
                            <option value="insertion">Insertion</option>
                            <option value="quick">Quick</option>
                        </select>
                        <button type="button" style = {btn1} onClick = {this.onchange}>Start</button>
                        <div className="slidecontainer" style={sliderstyle}>
                            <input type="range" min="10" max="40" onInput={this.oninput} className="slider" id="myRange1"  polyfill = "false"></input>
                        </div>
                        {/* <button type="button" style = {btn1} onClick = {this.stop}>Stop</button> */}
                        
                    </div>
                </header>
            </div>
        )
    }

   
}




const sliderstyle = {

}

const headStyle = {
    color : '#f1f5f9',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    background : 'black',
    textAlign : 'center'
}



const btn1 = {
    border : 'none',
   // alignSelf : 'centre',
    background : '#256ce1',
   //background : 'green',
    color : '#fff',
    padding : '7px 20px',
    cursor : 'pointer',
    borderRadius: '12px',
    margin : '7px 5px',
    fontFamily : 'helvetica'
}

const btn2 = {
       // alignSelf : 'centre',
    background : '#256ce1',
    color : '#fff',
    padding : '7px 20px',
    cursor : 'pointer',
    borderRadius : '12px',
    margin : '7px 5px',
    fontFamily : 'helvetica',
}

export default Header;
