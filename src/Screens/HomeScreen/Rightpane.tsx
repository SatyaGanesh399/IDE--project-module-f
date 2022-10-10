import React from "react";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";

interface HeaderProps {
  readonly variant: string;
}

interface headingSize {
  readonly size: string;
}

const StyledRightPane = styled.div`
  padding: 2rem;
  background: #fafafa;
`;

const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: ${(props) => (props.variant === "primary" ? "2rem" : "1rem")};

  &::after {
    position: absolute;
    content: "";
    bottom: -1.25rem;
    width: 100%;
    height: 2px;
    background: rgba(0, 0, 0, 0.25);
    display: ${(props) => (props.variant === "primary" ? "block" : "none")};
  }
`;
const Heading = styled.h3<headingSize>`
  font-weight: 400;
  font-size: ${(props) => (props.size === "main" ? "1.8rem" : "1.5rem")};

  span {
    font-weight: 700;
  }
`;

const AddButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 1.1rem;
  cursor: pointer;
  span {
    font-weight: 700;
  }
  transition: all 0.25s ease;
  &:hover {
    opacity: 0.75;
    scale: 1.1;
  }
`;

const Folder = styled.div`
  margin-bottom: 0.5rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;

const PlaygroundCard = styled.div`
  display : flex;
  align-items : center;
  padding : 0.6rem;
  gap : 1rem;
  box-shadow: 5px 7px 20px -8px rgba(0,0,0,0.4);
`;

const SmallImage = styled.img`
width : 75px;
`
const CardContent = styled.div`
flex-grow : 1;

h5{
    font-weight : 400;
    font-size : 1.2rem;
    margin-bottom : 0.5rem;
}
`;

const Icons = styled.div`
display : flex;
gap : 0.5rem;
font-size : 1.2rem;
`
const RightPane = () => {
  return (
    <StyledRightPane>
      <Header variant="primary">
        <Heading size="main">
          My <span>playground</span>
        </Heading>
        <div className="Heading">
          <AddButton> + New Folder</AddButton>
        </div>
      </Header>
      <Folder>
        <Header variant="secondary">
          <Heading size="secondary">Data Structures</Heading>
          <div className="AddButton">
            <span>+</span> New Playground
          </div>
        </Header>
        <CardContainer>
          <PlaygroundCard>
            <SmallImage src="./logo-small.png" alt="" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Language : C++</p>
            </CardContent>
            <Icons>
              <BsTrashFill />
              <AiTwotoneEdit />
            </Icons>
          </PlaygroundCard>
          <PlaygroundCard>
            <SmallImage src="./logo-small.png" alt="" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Language : C++</p>
            </CardContent>
            <Icons>
              <BsTrashFill />
              <AiTwotoneEdit />
            </Icons>
          </PlaygroundCard>
          <PlaygroundCard>
            <SmallImage src="./logo-small.png" alt="" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Language : C++</p>
            </CardContent>
            <Icons>
              <BsTrashFill />
              <AiTwotoneEdit />
            </Icons>
          </PlaygroundCard>
        </CardContainer>
      </Folder>
    </StyledRightPane>
  );
};

export default RightPane;
