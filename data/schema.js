import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import mocks from './mocks';
import resolvers from './resolvers';
const typeDefs = `
type Query {
  testString: String
  author:[Author]
  allAuthors:[Author]
}
type Author {
  id: Int
  age: String
  name: String
  gender:String
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
`;

const schema = makeExecutableSchema({ typeDefs,resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
