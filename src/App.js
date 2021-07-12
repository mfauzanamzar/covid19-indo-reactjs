import './App.css';
import React, { Component } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Visitor from './components/Visitor';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
       
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' exact component={About} />
        </Switch>
      </div>
      </Router>
    )
  }
}


