import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

// Construct a schema using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize an Express application
const app = express();

// Start Apollo Server
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Define the port number
  const PORT = process.env.PORT || 4000;

  // Start the server
  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
    );
  });
}

startServer();
