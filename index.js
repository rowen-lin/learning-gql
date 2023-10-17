import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/type-defs.js';

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`API is running on ${url}`);
});

// process.on('warning', (e) => console.warn(e.stack));
