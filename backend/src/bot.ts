import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { addUserToDatabase } from './supabase';

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN!, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from?.id;

  if (userId) {
    await addUserToDatabase(userId);
    bot.sendMessage(chatId, 'Welcome to TapMe! Start tapping to earn coins.');
  }
});

export default bot;
