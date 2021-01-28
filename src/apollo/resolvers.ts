import { Config } from 'apollo-server-micro';
import { API_ROOT_PATH } from '../config/constants';

export const resolvers: Config['resolvers'] = {
  Query: {
    post: async (_, { id }) => {
      try {
        const response = await fetch(`${API_ROOT_PATH}/getPost?id=${id}`);
        const post = await response.json();
        return post.data;
      } catch (e) {
        console.error(e);
      }
    },

    posts: async () => {
      try {
        const response = await fetch(`${API_ROOT_PATH}/getPosts`);
        const postRes = await response.json();
        return postRes.data;
      } catch (e) {
        console.error(e);
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
      }
    },

    deletePost: async (_, { id }) => {
      try {
        await fetch(`${API_ROOT_PATH}/deletePost?id=${id}`, {
          method: 'DELETE',
        });
      } catch (e) {
        console.error(e);
        return { result: false };
      }
      return { result: true };
    },
  },
};
