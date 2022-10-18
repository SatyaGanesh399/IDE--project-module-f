import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { CloseButton, Modalprops } from '../Modal'

function EditCardTitle({closeModal, identifier} : Modalprops) {
  return (
    <div>EditCardTitle
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

export default EditCardTitle