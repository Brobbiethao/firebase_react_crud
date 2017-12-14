import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.dataRef = database.ref('/');

    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newData = database.ref('/AmazingData')
      // .child('AmazingData')
      .push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { JSON.stringify(this.state.data, null, 2) }
        </p>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" value={this.state.newData} onChange={this.handleChange} />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
