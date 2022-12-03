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
  Input,
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
          <ModalHeader>
            <b>Upload to IPFS</b>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="file"></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={"blue"}>Upload</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
