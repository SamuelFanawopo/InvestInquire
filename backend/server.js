import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";

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
