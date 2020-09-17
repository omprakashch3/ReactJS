import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Component life cycle</h2>
        <Body />
      </div>
    </div>
  );
}

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0,
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber() {
    // console.log("Random number called");
    this.setState({ r: Math.floor(Math.random() * 10) });
  }

  render() {
    return (
      <div>
        <p className="App-link">
          Edit <code>src/App.js</code> and save to reload. Learn React
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.r} />
      </div>
    );
  }
}

class Numbers extends Component {
  // componentDidMount() {
  //   console.log("componentDidMount  here");
  // }
  // componentWillMount() {
  //   console.log("componentWillMount called here");
  // }
  // componentWillRecieveProps(newProps) {
  //   console.log("componentWillRecieveProps  called");
  // }

  // ComponentDidUpdate(newProps, nextState) {
  //   console.log("called  ComponentDidUpdate update");
  // }
  // componentWillUnmount() {
  //   console.log("called  componentWillUnmoun un mount");
  // }

  render() {
    return (
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
