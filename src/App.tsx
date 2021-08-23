import React from 'react';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h1 className="animate__animated animate__fadeInLeft">React + Typescript</h1>
        <TestComponent id={1} name={'Diego'} active={true}/>
      </div>
    </div>
  );
}

export default App;
