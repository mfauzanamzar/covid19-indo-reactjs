import "./App.css";
import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Content from "./components/Content";
import Hero from "./components/Hero";
import CaseByLocation from "./components/CaseByLocation";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-banner">
          <Appbar />
          <Hero />
        </div>
        <CaseByLocation/>
        <Content />
      </div>
    );
  }
}
