/** @format */

import React, { useCallback, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./style.module.css";
import NewUpload from "../Uploads/Upload";
import { useAccount } from "wagmi";
// import Logo from "assets/Storage.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConnected } = useAccount();
  return (
    <>
      <div className={styles.nav}>
        {/* <Image src="assets/Storage.png" /> */}
        <img src="assets/Storage.png" width={44} />
        <NewUpload onOpen={onOpen} />
        <ConnectButton />
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            "sfdsdf"
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
