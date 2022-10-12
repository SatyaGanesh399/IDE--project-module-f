import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./Rightpane";
import styled from "styled-components";

const HomeScreenContainer = styled.div`
    postition : relative;
    width = 100%
    height : 100vh;
`

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
    </HomeScreenContainer>
  );
};

export default HomeScreen;
