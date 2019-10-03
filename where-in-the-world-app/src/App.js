import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import api from './services/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restData: []
    };
  }

  componentDidMount() {
    api
      .get()
      .then((res) => {
      console.log("Infos:", res);
      this.setState({ restData: res.data.name });
    });
  }

  render() {
    const { restData } = this.state;
      return (
        <div>
          <Header />
          <div>
            { restData.map((name) => (
              <div>
                <p>{name.name}</p>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default App;



/*
DEFAULT 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/