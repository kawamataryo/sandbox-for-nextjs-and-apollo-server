import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Article {
    id: Int
    title: String
    context: String
  }
  type Query {
    book(title: String): Book
    books: [Book]
    articles: [Article]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const articles = [
  {
    id: 1,
    title: 'hoge',
    context: 'hogehoge'
  },
  {
    id: 2,
    title: 'fuga',
    context: 'fugafuga'
  }
]

const resolvers = {
  Query: {
    book: (_, { title }) => {
      const hit = books.filter(
        (book) => book.title == title
      )
      return hit ? hit[0] : null
    },
    books: () => books,
    articles: () => articles
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      books.push({ title, author });
      return { title, author }
    }
  }
};

export const schema = makeExecutableSchema({ typeDefs, resolvers })


export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})