import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NumberShow extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase(event){
    this.setState(prevState =>({
      count: prevState.count + 1
    }));
  }
  decrease(event){
    this.setState(prevState =>({
      count: prevState.count - 1
    }));
  }
  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={this.increase}>+
        </button>
        <button
          onClick={this.decrease}>-
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <NumberShow/>
      </div>
    );
  }
}

export default App;
