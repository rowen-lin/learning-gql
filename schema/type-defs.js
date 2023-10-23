import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  # interface
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    # default use taiwan
    nationality: String = "TAIWAN"
  }

  input UpdateUserInput {
    id: ID!
    name: String
    username: String
    age: Int
    nationality: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(input: ID!): User
  }
`;

export { typeDefs };
