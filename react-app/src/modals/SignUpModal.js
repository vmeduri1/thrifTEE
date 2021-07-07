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

} from "@chakra-ui/react";
import React, { useState } from 'react';
import { SignUpForm } from "./SignUpForm";
import { LoginForm } from "./LoginForm";

// ------------------------------------------------------------------------------------------//


export function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [formRender, setFormRender] = useState(true)

  // const renderButton = () => {
  //   const buttonRender = (
  //     <>
  //       { formRender ? <p> Already have an account? &nbsp; </p> : <p> Don't have an account? &nbsp; </p>}
  //       <Button onClick={() => setFormRender(!formRender)}>
  //         {formRender ? "Log In" : "Sign Up"}
  //       </Button >
  //     </>
  //   )
  //   return buttonRender
  // }


  return (
    <>
      <Button onClick={onOpen} colorScheme="white" variant="ghost" _hover={{ color: "white", fontWeight: "bold", bg: "gray.500" }}> Sign Up </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>
            Create a thrifTEE Account
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody pb={6}>
            <SignUpForm />
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
