import React, { Component } from 'react';
import NoteForm from './NoteForm';
import AllNote from './AllNote';
import './index.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div style={{ marginLeft: "-1200px", fontSize: "30px", color: "white"}}>Note Management</div>
        </div>
        <NoteForm />
        <AllNote />
      </div>
    );
  }
}
export default App;