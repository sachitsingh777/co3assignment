import { createSchema, createYoga } from 'graphql-yoga';
import { updateCoins, getUserCoins } from './supabase';

const typeDefs = `
  type Query {
    coins(userId: Int!): Int
  }

  type Mutation {
    incrementCoins(userId: Int!, amount: Int!): Int
  }
`;

const resolvers = {
  Query: {
    coins: async (_: any, { userId }: { userId: number }) => {
      return await getUserCoins(userId);
    },
  },
  Mutation: {
    incrementCoins: async (_: any, { userId, amount }: { userId: number, amount: number }) => {
      const currentCoins = await getUserCoins(userId);
      const newCoins = (currentCoins || 0) + amount;
      await updateCoins(userId, newCoins);
      return newCoins;
    },
  },
};

const schema = createSchema({ typeDefs, resolvers });
export const yoga = createYoga({ schema });
