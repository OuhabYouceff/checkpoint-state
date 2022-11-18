//import logo from './logo.svg';
import React, { Component } from "react";
import Profile from 'C:/Users/Youcef/Desktop/GMC4/state/src/components/showprofile.js';
import './App.css';

class App extends Component {
  state={
    time:0
  }
  componentDidMount()
{
    setInterval(() => {this.setState({time: this.state.time + 1})}, 1000)
}
  render() {
    return (
      <div className="App">
        <Profile className="profileClass"
          time={this.state.time}
        />
      </div>
    );
  }
}


export default App;
