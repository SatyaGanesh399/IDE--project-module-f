import React from "react";
import styled from "styled-components";
import {RiCloseFill} from 'react-icons/ri'
import { ModalContext } from "../ModalContext/ModalContext";

const ModalContainerStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
background-color : white;
width : 30%;
padding : 2rem;
border-radius : 10px;
`;

const Header = styled.div`
display : flex;
align-items : center;
justify-content : space-between;
`
const CloseButton = styled.button`
background : transparent;
outline : 0;
border : 0;
font-size : 1.2rem;
cursor : pointer;
` 
function Modal() {

  const EditModal = () => {
    return <div>Edit Modal</div>
  }
   

  const ModalFeatures = React.useContext(ModalContext)!
  const setIsOpen = ModalFeatures?.setIsOpen;
  return (
    <ModalContainerStyles>
      <ModalContent>
        <Header>
            <div className="Heading">
                Update Folder Name
            </div>
            <CloseButton onClick={() => {setIsOpen({
              value : false,
              type : '',
              identifier : {
                folderId : '',
                cardId : ','
              }
            })
            }}>
            <RiCloseFill/>
            </CloseButton>
        </Header>
      </ModalContent>
    </ModalContainerStyles>
  );
}

export default Modal;
