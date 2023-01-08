import './App.css';
import React from 'react'
import Header from './components/Header'
import FileUpload from './components/FileUpload'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    } 
  }
  render() {
    return (
    <div className="App">
      <Header />
      <FileUpload />

    </div>
    )
  };
}

export default App;
