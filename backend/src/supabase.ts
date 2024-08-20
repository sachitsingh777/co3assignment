import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const addUserToDatabase = async (userId: number) => {
  const { data, error } = await supabase
    .from('users')
    .insert([{ id: userId, coins: 0 }]);

  if (error) console.error('Error adding user:', error);
  return data;
};

export const updateCoins = async (userId: number, coins: number) => {
  const { data, error } = await supabase
    .from('users')
    .update({ coins })
    .eq('id', userId);

  if (error) console.error('Error updating coins:', error);
  return data;
};

export const getUserCoins = async (userId: number) => {
  const { data, error } = await supabase
    .from('users')
    .select('coins')
    .eq('id', userId)
    .single();

  if (error) console.error('Error getting coins:', error);
  return data?.coins;
};
