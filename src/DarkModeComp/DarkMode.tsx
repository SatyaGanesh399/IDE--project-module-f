import React from 'react'
import {MdDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
import styled, { StyledComponent } from 'styled-components'

let toggled  = "none";

const DarModeButtons = styled.button`
position : relative;
background : transparent;
outline : 0;
border : 0;
& > svg:nth-child(1){
    position : absolute;
    top : -15px;
    right : 0;
    font-size : 2rem;
    display : ${toggled};
 }
 & > svg:nth-child(2){
    position : absolute;
    color : #FFEA00;
    top : -15px;
    right : 0;
    font-size : 2rem;
 }
`

function DarkMode() {
    
  return (
    <DarModeButtons>
        <MdDarkMode />
        <MdOutlineLightMode />
    </DarModeButtons>
  )
}

export default DarkMode
