import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../apollo/type-defs';
import { resolvers } from '../../apollo/resolvers';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({ typeDefs, resolvers }).createHandler({
  path: '/api/graphql',
});
