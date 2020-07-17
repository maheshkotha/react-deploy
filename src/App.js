import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header name="resume" />
      <Main />
    </div>
  );
}

export default App;
