import { Config, gql } from 'apollo-server-micro';

export const typeDefs: Config['typeDefs'] = gql`
  type Post {
    id: Int
    title: String
    content: String
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
`;
