import React, { useState } from 'react'
import styled from 'styled-components'
import CodeEditor from './CodeEditor'
import {MdFullscreen} from 'react-icons/md'
import { CgImport } from "react-icons/cg";
import { CgExport } from "react-icons/cg";
import { AiTwotoneEdit } from "react-icons/ai";
import Select from 'react-select';

const StyledEditorContainer = styled.div`
height : 100vh
display : flex;
flex-direction : column;
`
const UpperToolbar = styled.div`
background: white;
height : 4rem;
display : flex;
align-items : center;
justify-content : space-between;
padding : 0.2rem;
`;

const Title = styled.div`
display : flex;
align-items:center;
gap : 1.2rem;

h3{
  font-size : 1.3rem;
}

button {
  background : transparent;
  font-size : 1.3rem;
  border : 0;
  outline : 0;
}
`

// const InsideCodeEditor = styled.div`
// height : calc(100% - 12.5rem);
// overflow -y : scroll;
// `
const LowerToolbar = styled.div`
background: white;
height : 4rem;
display : flex;
align-items: center;
justify-content : space-between;
padding : 0.3rem;

button{
  background : transparent;
  outline : 0;
  border : 0;
  font-size : 1.1 rem;
  display : flex;
  align-items : center;
  gap : 0.75rem;

  svg{
    font-size : 1.4rem;
  }

}
`
const ButtonGroup = styled.div`
display : flex;
align-items : center;
gap : 2.5rem;
`

const RunCodeButton = styled.div`
padding : 0.8rem 2rem;
background-color : #0097d7 !important;
color : white;
font-weight : 700;
border-weight : 0.5rem;
margin-right : 1rem;
`
const SelectBars = styled.div`
display : flex;
align-items : center;
gap : 1rem;
`


function EditorContainer() {

  const [selectedLang, setSelectedLang] = useState(null)
  const [selectedTheme, setSelectedTheme] = useState(null)

  const LanguageOptions = [
    {value : 'C++', label : "C++"},
    {value : 'Java', label : "Java"},
    {value : 'Python', label : "Python"},
    {value : 'JavaScript', label : "JavaScript"}
  ]


  const ThemeOptions = [
    {value : 'duotoneLight', label : "duotoneLight"},
    {value : 'xcodeLight', label : "xcodeLight"},
    {value : 'okaidia', label : "okaidia"},
    {value : 'githubDark', label : "githubDark"},
    {value : 'darcula', label : "darcula"},
    {value : 'bespin', label : "bespin"},
  ]
  return (
    <StyledEditorContainer>

      <UpperToolbar>
        <Title>
      <h3>Stack implementation</h3>
      <button><AiTwotoneEdit/></button>
        </Title>
        <SelectBars>
          <Select value = {selectedLang} onChange = {() => {}} options = {LanguageOptions}/>
          <Select value = {selectedTheme} onChange = {() => {}} options = {ThemeOptions}/>
        </SelectBars>
      </UpperToolbar>


      {/* <InsideCodeEditor> */}
      <CodeEditor />
      {/* </InsideCodeEditor> */}

      <LowerToolbar>
        <ButtonGroup>
          <button><MdFullscreen/>Full Screen</button>
          <button><CgImport />Import Code</button>
          <button><CgExport />Export Icon</button>
          
        </ButtonGroup>
        <RunCodeButton>Run Code</RunCodeButton>
      </LowerToolbar>

      </StyledEditorContainer>
  )
}

export default EditorContainer