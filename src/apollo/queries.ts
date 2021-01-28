import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query Posts {
    posts {
      id
      title
      content
    }
  }
`;

export const POST_QUERY = gql`
  query Post($id: Int) {
    post(id: $id) {
      id
      title
      content
    }
  }
`;

export const ADD_POST_MUTATION = gql`
  mutation AddPost($title: String, $content: String) {
    addPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($id: Int) {
    deletePost(id: $id) {
      result
    }
  }
`;
