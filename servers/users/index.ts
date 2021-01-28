import { ApolloServer } from 'apollo-server';
import { typeDefs } from './type-defs';
import { resolvers } from './resolvers';
import { buildFederatedSchema } from '@apollo/federation';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
