import './App.css';
import React from 'react';
import Toggle from "./components/Toggle";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <div className='component-wrapper'>
        <Toggle/>
      </div>    
      <div className='component-wrapper'>
        <Modal/>
      </div>    
    </div>
  );
}

export default App;


