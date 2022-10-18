import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { CloseButton, Modalprops } from '../Modal'

function EditFolderTitle({closeModal, identifier} : Modalprops) {
  return (
    <div>EditFolderTitle
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

export default EditFolderTitle