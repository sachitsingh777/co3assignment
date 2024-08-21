import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { yoga } from './graphql';
import bot from './bot';

dotenv.config();
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

bot.on('message', (msg) => {
  console.log('Message received:', msg.text);
});

const app = express();


app.use(cors());

app.use('/graphql', yoga);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
