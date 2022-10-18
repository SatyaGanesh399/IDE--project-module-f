import React from 'react'
import styled from 'styled-components'
import CodeEditor from './CodeEditor'

const StyledEditorContainer = styled.div`
display : flex;
flex-direction : column;
`
const UpperToolbar = styled.div`
background: white;
height : 4rem;
`
const LowerToolbar = styled.div`
background: white;
height : 4rem;
`
function EditorContainer() {
  return (
    <StyledEditorContainer>
      <UpperToolbar>
      <h3>Stack implementation</h3>
      </UpperToolbar>
      <CodeEditor />
      <LowerToolbar>

      </LowerToolbar>
      </StyledEditorContainer>
  )
}

export default EditorContainer