import React, { useState } from 'react';
import styled from "styled-components";

const Input = styled.input`
  display:none;  

  &:checked + label{
    background-color : #E9967A;


    &:before {
      left: calc(100% - 30px);
    }
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 30px;
  background-color: #DBDBDB;
  border-radius: 50px;
  transition: all 0.2s;
  cursor: pointer;

  ::before{
    content:"";
    position: absolute;
    top: 3px;
    left: 5px;
    display:block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    transition: all 0.3s;
  }
`;

const Div = styled.div`
  padding: 10px 0;
  font-weight: 800;
  margin-bottom: 30px;
`;
const ToggleMent = styled.div`
  padding: 10px 0;
  color : ${props => props.color ? "#E9967A" : "#222222"};
`;


function Toggle(){

  const [isToggle, setToggle] = useState(false);

  function controlToggle () {
    return setToggle(!isToggle);
  }
  
  return(
    <div class="toggle-wrap">
      <Div>
        Toggle
      </Div>

      <Input
        id="switch"
        type="checkbox"
        class="toggleSwitch"
        onClick={() => controlToggle()}
        isToggle          
      />
      <Label
        for="switch"
        class="toggleOnOff"
      />
      <ToggleMent color={isToggle}>
        {isToggle ? "Toggle switch ON" : "Toggle switch OFF"}
      </ToggleMent>
    </div>
  );
}
export default Toggle;
