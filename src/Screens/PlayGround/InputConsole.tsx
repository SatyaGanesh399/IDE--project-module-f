import React from "react";
import styled from "styled-components";
import { CgImport } from "react-icons/cg";

const Console = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  height: 4rem;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem;
  font-size: 1.25rem;
  font-weight: 700;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
  border: 0;
  outline: 0;
`;

function InputConsole() {
  return (
    <Console>
      <Header>
        Input Console:
        <span>
          <CgImport />
          Import output
        </span>
      </Header>
      <TextArea></TextArea>
    </Console>
  );
}

export default InputConsole;
