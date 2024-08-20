import express from 'express';
import { yoga } from './graphql';
import bot from './bot';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use('/graphql', yoga);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
