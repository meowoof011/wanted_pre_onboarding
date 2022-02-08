import React, { useState } from 'react';
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 30px 0;
  padding: 15px 19px;
  background-color : #E9967A;
  border:none;
  border-radius:20px;
  outline:none;
  color:white;
  font-size: 18px;
  font-weight: 600;
  &:active{
    background-color: #816156;
  }
`;
const ModalWrapper = styled.div`
    opacity: ${props => props.modalShow ? "1" : "0"};
    display: ${props => props.modalShow ? "flex" : "none"};
    z-index: 300;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.3s 0.3s;
`;
const ModalLightBox = styled.span`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s;
  transition-delay: 0.2s;
`;
const ModalBox = styled.div`
  z-index: 120;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 250px;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
`;
const ModalContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #222222;
`;

const Div = styled.div`
  padding: 10px 0;
  font-weight: 800;
`;


function Modal(){

  const [isModal, setModal] = useState(false);

  function ControlModal () {
    return setModal(!isModal);
  }
  
  return(
    <div>
      <Div>
        Modal
      </Div>

      <Button
        type="button"
        class="btn"
        onClick={() => ControlModal()}
      >
        Open Modal
      </Button>
      
      <ModalWrapper modalShow={isModal}>
        <ModalLightBox/>
        
        <ModalBox>
          <ModalContent>
            <span class="modal-ttl">
              {isModal ? "Hi😁" : "Bye😥"}
            </span>
            
            <div class="modal-btn-wrap">
              <Button
                type="button"
                class="btn"
                onClick={() => ControlModal()}
                >
                Close Modal
              </Button>
            </div>
          </ModalContent>
        </ModalBox>
      </ModalWrapper>
    </div>
  );
}

export default Modal;
