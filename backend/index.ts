import express from "express";
import Web3 from "web3";
import { Request, Response } from "express";
import cors from 'cors'
import { CONTRACT_ADDRESS, INFURA_APP_ID } from "./config";
const app = express();
app.use(cors()); // You forgot to invoke cors as a function
const daoContractABI = require("./DAO.json"); // Use require to load the ABI
var web3 = new Web3(new Web3.providers.HttpProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_APP_ID}`));
// console.log(web3)
const daoContract = new web3.eth.Contract(daoContractABI,CONTRACT_ADDRESS);

console.log("daoContract", daoContract)
app.get("/proposals", (req: Request, res: Response) => {
    daoContract.methods
        .proposals()
        .call()
        .then((proposals: any) => {
            res.json(proposals);
        })
        .catch((error: Error) => {
            res.status(500).json({ error: "Error fetching proposals" });
        });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
