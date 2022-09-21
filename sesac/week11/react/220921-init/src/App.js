import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = "리액트";
  return (
    <div>
      {name === "뿡야뿡야" ? ( 
      <h1>리액트 맞아</h1>
      ) : (
      <h2>리액트 아님</h2>
    )}
    </div>
  );
}

export default App;
