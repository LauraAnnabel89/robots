import React, { Component } from "react";
import "./mars.css";

class Mars extends Component {
  state = {
   robotPosition: '3,3',
  };

  handleInput = (e) => {
   this.setState({
    robotPosition: {
     [e.target.id]: e.target.value,
     right: e.target.value,
     forward: e.target.value + 1
    }
   })
   console.log(this.state)
  };
 
// Robots starting coordinates are 3,3
// Adding in an input cha


  render() {
   const robotPosition = this.state.robotPosition
    return (
      <div>
        <button value={"left"} id="left" onClick={e => this.handleInput(e, robotPosition)} >Left</button>
        <button value={"right"} id="right" onClick={e => this.handleInput(e, "value")} >right</button>
        <button value={"forward"} id="forward" onClick={e => this.handleInput(e, "value")} >forward</button>
        <ul className="Mars__grid">
        <h1>Robot</h1>
          <li className="Mars__gridSquare">1</li>
          <li className="Mars__gridSquare">2</li>
          <li className="Mars__gridSquare">3</li>
          <li className="Mars__gridSquare">4</li>
          <li className="Mars__gridSquare">5</li>
          <li className="Mars__gridSquare">6</li>
        </ul>
      </div>
    );
  }
}

export default Mars;


