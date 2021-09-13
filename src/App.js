import './App.css';
import React, { Component } from 'react'
import Home from './components/Home'
import Navbar from './components/NavBar/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Home/>
      </div>
      </Router>
    )
  }
}


