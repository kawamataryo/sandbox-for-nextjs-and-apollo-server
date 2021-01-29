export const DB = {
  users: [
    { id: 1, name: 'taro' },
    { id: 2, name: 'jiro' },
  ],
};

export const resolvers = {
  Query: {
    users: () => DB.users,
    user: (_, { id }) => DB.users.find((u) => u.id === id),
  },

  Mutation: {
    addUser: (_, { name }) => {
      const user = { id: DB.users.length + 1, name };
      DB.users.push(user);
      return user;
    },
  },

  User: {
    __resolveReference(user) {
      return DB.users.find((u) => u.id === user.id);
    },
  },
};
