import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { CloseButton, Modalprops } from '../Modal'

function NewCard({closeModal, identifier} : Modalprops) {
  return (
    <div>NewCard
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

export default NewCard