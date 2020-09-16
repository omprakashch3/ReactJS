import React, { Component } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parrent />
    </div>
  );
}

class Parrent extends Component {
  render() {
    return (
      <div>
        <h2>Just some info</h2>
        <Cars msg="cars are awesome" model="36757" coolCars={this.props.cars} />
      </div>
    );
  }
}

Parrent.defaultProps = {
  cars: ["BMW", "MERCIDIES", "SUZULI", "MAHINDRA"],
};

class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3> i am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <p>
          {this.props.coolCars.map((item, i) => {
            return "  " + i + " " + item;
          })}
        </p>
      </div>
    );
  }
}

export default App;
