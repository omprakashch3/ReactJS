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
  constructor(props) {
    super(props);
    this.state = {
      cars: ["BMW", "MERCIDIES", "SUZULI", "atat", "audi"],
    };
    this.handleClick = this.handleClick.bind(this); //binding the method
  }
  handleClick() {
    this.setState({ cars: this.state.cars.reverse() });
  }
  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Just some info</h2>
        <Cars msg="cars are awesome" model="36757" coolCars={this.state.cars} />
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
            return <p key={i}>{item}</p>;
          })}
        </p>
      </div>
    );
  }
}

export default App;
