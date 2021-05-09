import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Course from './pages/course';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Signin from './pages/signin';
import Blog from './blog/Blog';
import Visual from './AlgoTeacher/App';

function App() {
  return (
    <Router>
      {window.location.pathname !='/visualisation' ? (
      <Navbar />) : null}
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/visualisation' component={Visual}/>
        <Route path='/about' component={About} />
        <Route path='/course' component={Course} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={Signin} />
        <Route path='/blog' component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
