//  config dotenv
import * as dotenv from "dotenv";
dotenv.config();

//  config OpenAI and connect key from .env
import OpenAI from "openai";
const openAI = new OpenAI({ apiKey: process.env.OPENAI, });

//  config express and cors and json middleware
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const aiResponse = await openAI.images.generate({
      prompt,
      model: 'dall-e-3',
      n: 1,
      size: '1024x1024',
    });

    const image = aiResponse.data[0].url;
    res.send({ image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.message || 'Something went wrong');
  }
});

app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));