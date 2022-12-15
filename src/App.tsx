import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';

function App() {
   const inputEl = useRef(null);
  const onButtonClick = () => {

  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Фокусуватись на полі вводу</button>
    </>
  );
}

export default App;
