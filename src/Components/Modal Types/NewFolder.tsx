import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { CloseButton, Modalprops } from '../Modal'

function NewFolder({closeModal, identifier} : Modalprops) {
  return (
    <div>NewFolder
        <CloseButton
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseButton>
    </div>
  )
}

export default NewFolder