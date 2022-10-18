import React from 'react'
import { useContext} from 'react'
import EditorContainer from './EditorContainer';
import InputConsole from './InputConsole';
import Navbar from './Navbar';
import OutputConsole from './OutputConsole';
import {useParams} from 'react-router-dom'
import { PlaygroundContext } from '../../ModalContext/PlaygroundContext';
import CodeEditor from './CodeEditor';
import styled from 'styled-components';

const MainApp = styled.div`
  display : grid;
  grid-template-columns: 2fr 1fr;
  background : red;
  height : calc(100vh - 4.5rem)
`
const Consoles = styled.div`
display : grid;
grid-template-column : 1fr;
grid-template-rows : 1fr 1fr;
`

function MyPlayground() {
  
  const { folderId, playgroundId } = useParams();

  // access all playgrounds
  const { folders } = useContext(PlaygroundContext)!;
  const { title, language } =
    folders[folderId as string].items[playgroundId as string];


  return (
      <div>
        <Navbar />
        <MainApp>
          <EditorContainer />
          <div>
            <InputConsole />
            <OutputConsole />
          </div>
        </MainApp>
      </div>
  );
};

export default MyPlayground;