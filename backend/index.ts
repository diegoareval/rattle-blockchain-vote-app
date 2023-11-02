import express from "express";
import Web3 from "web3";
import { Request, Response } from "express";

const app = express();
const web3 = new Web3(`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_APP_ID}`);
const daoContractABI: any[] = require("./DAO.json");

const daoContract = new web3.eth.Contract(daoContractABI, process.env.CONTRACT_ADDRESS);

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
