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
        <h3>prop number is :{this.props.propNumber}</h3>
        <h3>prop number is :{}</h3>
        <Cars msg="cars are awesome" model="36757" coolCars={this.props.cars} />
      </div>
    );
  }
}

Parrent.propTypes = {
  propObject: React.propObject,
  propString: React.propString,
  propNumber: React.PropString,
};

Parrent.defaultProps = {
  propNumber: 5,
  propString: "hi omprakash",
  propObject: {
    obj1: "i am obj1",
    obj2: "i am obj2",
    obj3: "i am obj3",
  },
};

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
