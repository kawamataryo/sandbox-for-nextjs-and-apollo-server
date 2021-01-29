import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Post {
    id: Int
    title: String
    content: String
    user: User
  }

  type DeleteResponse {
    result: Boolean
  }

  type Query {
    post(id: Int): Post
    posts: [Post]
  }

  type Mutation {
    addPost(title: String, content: String): Post
    deletePost(id: Int): DeleteResponse
  }

  extend type User @key(fields: "id") {
    id: Int! @external
  }
`;
