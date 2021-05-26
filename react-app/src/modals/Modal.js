import {
  Modal,                   //  The wrapper that provides context for its children.
  ModalOverlay,            //  The dimmed overlay behind the modal dialog.
  ModalContent,            //  The container for the modal dialog's content.
  ModalHeader,             //  The header that labels the modal dialog.
  ModalFooter,             //  The footer that houses the modal actions.
  ModalBody,               //  The wrapper that houses the modal's main content.
  ModalCloseButton,        //  The button that closes the modal.
  useDisclosure,           //  A handler to handle the open, close etc of the modal
  useOutsideClick,         //  A handler to handle click when outside the ref element to close
} from "@chakra-ui/react";
import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// ------------------------------------------------------------------------------------------//


export default function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
