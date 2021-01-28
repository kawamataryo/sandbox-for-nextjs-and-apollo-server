import { ApolloServer } from 'apollo-server-micro';
import { ApolloGateway } from '@apollo/gateway';

export const config = {
  api: {
    bodyParser: false,
  },
};
const gateway = new ApolloGateway({
  serviceList: [
    { name: 'posts', url: 'http://localhost:4001' },
    { name: 'users', url: 'http://localhost:4002' },
  ],
});

export default new ApolloServer({
  gateway,
  subscriptions: false,
}).createHandler({
  path: '/api/graphql',
});
