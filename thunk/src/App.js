import React, { Component } from 'react';
import './App.css';

import StartButton from './components/container/StartButton';
import Task1ResultLabel from './components/container/Task1ResultLabel';
import Task2ResultLabel from './components/container/Task2ResultLabel';
import ItemList from './components/container/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <StartButton />
        </div>
        <div>
          Task1: <Task1ResultLabel />
        </div>
        <div>
          Task2: <Task2ResultLabel />
        </div>
        <ItemList />
      </div>
    );
  }
}

export default App;
