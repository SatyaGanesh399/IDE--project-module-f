import React, { useContext } from "react";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
import { ModalContext } from "../../ModalContext/ModalContext";

interface HeaderProps {
  readonly variant: string;
}
interface headingSize {
  readonly size: string;
}
const StyledRightPane = styled.div`
  padding: 2rem;
  background: #fafafa;
  position: absolute;
  width: 60%;
  right: 0;
  top: 0;
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
  row-gap: 1rem;
`;

const PlaygroundCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;

const SmallImage = styled.img`
  width: 75px;
`;
const CardContent = styled.div`
  flex-grow: 1;
  margin-left: -20px;

  h5 {
    font-weight: 400;
    font-size: 1 rem;
    margin-bottom: 0.5rem;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1 rem;
`;
const RightPane = () => {
  const ModalFeatures = useContext(ModalContext)!;
  const setIsOpen = ModalFeatures.setIsOpen;

  const Folders = {
    ["1"]: {
      title: "Folder Title 1",
      items: {
        ["item1"]: {
          title: "Stack Implementation",
          languages: "C++",
        },
        ["item2"]: {
          title: "Queue Implementation",
          languages: "C++",
        },
        ["item3"]: {
          title: "LinkedList Implementation",
          languages: "C++",
        },
      },
    },
    ["2"]: {
      title: "Folder Title 2",
      items: {
        ["item4"]: {
          title: "Stack Implementation",
          languages: "C++",
        },
        ["item5"]: {
          title: "Queue Implementation",
          languages: "C++",
        },
        ["item6"]: {
          title: "LinkedList Implementation",
          languages: "C++",
        },
      },
    },
  };

  return (
    <StyledRightPane>
      <Header variant="primary">
        <Heading size="main">
          My <span>playground</span>
        </Heading>
        <AddButton> + New Folder</AddButton>
      </Header>

      {Object.entries(Folders).map(([folderId, folder]) => (
        <Folder key={folderId}>
          <Header variant="secondary">
            <Heading size="secondary">{folder.title}</Heading>
            <AddButton>
              <span>+</span> New Playground
            </AddButton>
          </Header>

          <CardContainer>
            {Object.entries(folder.items).map(([cardId, card]) => (
              <PlaygroundCard>
                <SmallImage src="./logo-small.png" alt="" />
                <CardContent>
                  <h5>{card.title}</h5>
                  <p>Language : {card.languages}</p>
                </CardContent>
                <Icons>
                  <BsTrashFill />
                  <AiTwotoneEdit
                    onClick={() => {
                      setIsOpen({
                        value: true,
                        type: "edit-card",
                        identifier: {
                          folderId: folderId,
                          cardId: cardId,
                        },
                      });
                    }}
                  />
                </Icons>
              </PlaygroundCard>
            ))}
          </CardContainer>
        </Folder>
      ))}
    </StyledRightPane>
  );
};

export default RightPane;
