export const DB = {
  users: [
    { id: 1, name: 'taro' },
    { id: 2, name: 'jiro' },
  ],
};

export const resolvers = {
  Query: {
    users: () => DB.users,
    user: (_, { id }) => DB.users.filter((u) => u.id === id)[0],
  },

  Mutation: {
    addUser: (_, { name }) => {
      const user = { id: DB.users.length + 1, name };
      DB.users.push(user);
      return user;
    },
  },
};
