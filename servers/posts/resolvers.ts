import { API_ROOT_PATH } from '../../src/config/constants';
import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    post: async (_, { id }) => {
      try {
        const response = await fetch(`${API_ROOT_PATH}/getPost?id=${id}`);
        const post = await response.json();
        return post.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },

    posts: async () => {
      try {
        const response = await fetch(`${API_ROOT_PATH}/getPosts`);
        const postRes = await response.json();
        return postRes.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  },

  Mutation: {
    addPost: async (_, { title, content }) => {
      try {
        const response = await fetch(`${API_ROOT_PATH}/addPost`, {
          method: 'POST',
          body: JSON.stringify({ title, content }),
        });
        const posts = await response.json();
        return posts.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },

    deletePost: async (_, { id }) => {
      try {
        await fetch(`${API_ROOT_PATH}/deletePost?id=${id}`, {
          method: 'DELETE',
        });
      } catch (e) {
        console.error(e);
        throw e;
      }
      return { result: true };
    },
  },
};
