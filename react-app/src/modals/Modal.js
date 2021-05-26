import {
  Modal,                   //  The wrapper that provides context for its children.
  ModalOverlay,            //  The dimmed overlay behind the modal dialog.
  ModalContent,            //  The container for the modal dialog's content.
  ModalHeader,             //  The header that labels the modal dialog.
  ModalFooter,             //  The footer that houses the modal actions.
  ModalBody,               //  The wrapper that houses the modal's main content.
  ModalCloseButton,        //  The button that closes the modal.
  Button,
  useDisclosure,           //  A handler to handle the open, close etc of the modal
  useOutsideClick,         //  A handler to handle click when outside the ref element to close
} from "@chakra-ui/react";
import React, { useContext, useRef, useState, useEffect } from 'react';
// import
import ReactDOM from 'react-dom';
import { SignUpForm } from "./SignUpForm";
import { LoginForm } from "./LoginForm";

// ------------------------------------------------------------------------------------------//


export function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Sign-up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SignUpForm />
            <LoginForm />
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Sign Up </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}
