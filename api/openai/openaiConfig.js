import { OpenAI } from 'openai'; // Correctly import OpenAI from 'openai'
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set in your .env file");
}

// Use the OpenAI client directly without the Configuration constructor
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default openai;
