import { API_ROOT_PATH } from '../../src/config/constants';
import fetch from 'node-fetch';

const DB = {
  posts: [
    { id: 1, title: 'foo', content: 'foooo' },
    { id: 2, title: 'bar', content: 'baaaa' },
    { id: 3, title: 'baz', content: 'bazzz' },
  ],
};

export const resolvers = {
  Query: {
    post: (_, { id }) => DB.posts.filter((u) => u.id === id)[0],
    posts: () => DB.posts,
  },

  Mutation: {
    addPost: (_, { title, content }) => {
      const post = { id: DB.posts.length + 1, title, content };
      DB.posts.push(post);
      return post;
    },
    deletePost: (_, { id }) => {
      DB.posts = DB.posts.filter((u) => u.id !== id);
      return { result: true };
    },
  },
};
