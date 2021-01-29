import { API_ROOT_PATH } from '../../src/config/constants';
import fetch from 'node-fetch';

const DB = {
  posts: [
    { id: 1, title: 'foo', content: 'foooo', user: { id: 1 } },
    { id: 2, title: 'bar', content: 'baaaa', user: { id: 2 } },
    { id: 3, title: 'baz', content: 'bazzz', user: { id: 1 } },
  ],
};

export const resolvers = {
  Query: {
    post: (_, { id }) => DB.posts.find((u) => u.id === id),
    posts: () => DB.posts,
  },

  Mutation: {
    addPost: (_, { title, content }) => {
      const post = { id: DB.posts.length + 1, title, content, user: { id: 2 } };
      DB.posts.push(post);
      return post;
    },
    deletePost: (_, { id }) => {
      DB.posts = DB.posts.filter((u) => u.id !== id);
      return { result: true };
    },
  },
  Post: {
    user(post) {
      return { __typename: 'User', id: post.user.id };
    },
  },
};
