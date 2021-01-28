import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: Int
    name: String
  }

  type Query {
    user(id: Int): User
    users: [User]
  }

  type Mutation {
    addUser(name: String): User
  }
`;
