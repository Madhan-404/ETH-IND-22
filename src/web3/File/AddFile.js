/** @format */

import fileFunctions from "./FileFunctions.json";
import ContractAddress from "../../config.json";
import Web3 from "web3";

// Add size of the file
export const AddFile = async(fileType, cid, name, acc) => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const instance = new web3.eth.Contract(
    fileFunctions.abi,
    ContractAddress.FILEFUNCTIONS_CONTRACT_ADDRESS
  );
  console.log(fileType, cid, name, acc);
  const res = await instance.methods
    .addFile(fileType, cid, name)
    .send({ from: acc });
  console.log("Add file response: ", res);
};