import React from 'react';
import './App.css';
import Books from './Books';
import News from './News';
// import Home from './Home'

const App = () => {

  return (
    <div className="App">
      {/* <Home /> */}
      <Books />
      <News />
    </div>
  );
}


export default App;
