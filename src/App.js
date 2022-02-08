import './App.css';
import React from 'react';
import Toggle from "./components/Toggle";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  padding: 30px;
  border 2px solid #E9967A;
  border-radius: 10px;
  text-align: center;
`;

function App() {
  return (
    <ComponentWrapper>
      <Toggle/>
    </ComponentWrapper>
  );
}

export default App;


