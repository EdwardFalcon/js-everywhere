const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DataTime
  type Note {
    id: ID!
    content: String!
    author: String!
    createdAt: DataTime!
    updatedAt: DataTime!
  }
  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
  }
`;
