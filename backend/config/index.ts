// app.ts 
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 
export const INFURA_APP_ID = process.env.INFURA_APP_ID; 
export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS; 