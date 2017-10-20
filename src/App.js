import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {

  render() {
    return (
      <div className="App" >
      {this.props.children}
    </div>
    );
  }
}

export default App;
