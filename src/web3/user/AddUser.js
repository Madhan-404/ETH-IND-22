/** @format */

import UserFunctions from "./UserFunctions.json";
import ContractAddress from "../../config.json";
import Web3 from "web3";
const addUser = async(acc) => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const instance = new web3.eth.Contract(
    UserFunctions.abi,
    ContractAddress.USERFUNCTIONS_CONTRACT_ADDRESS
  );
  const res = await instance.methods.AddUser().send({ from: acc });
  console.log(res);
};
export { addUser };