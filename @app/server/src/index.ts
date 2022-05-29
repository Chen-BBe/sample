import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(title: String!): Todo
    completeTodo(id: Int!): Todo
  }

  type Todo {
    id: ID
    title: String!
    complete: Boolean!
  }
`);

const todos = [
  {
    id: 1,
    title: 'Do a thing!',
    complete: false,
  },
  {
    id: 2,
    title: 'Do this thing also!',
    complete: false,
  },
];

var root = {
  todos: () => {
    return todos;
  },
  addTodo: ({ title }: { title: string }) => {
    const lastId = Math.max(...todos.map((todo) => todo.id));
    const newTodo = { id: lastId + 1, title, complete: false };
    todos.push(newTodo);

    return newTodo;
  },
  completeTodo: ({ id }: { id: number }) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('Unable to find todo with that id.');
    }
    todo.complete = true;
    return todo;
  },
};

var app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
app.listen(4000);
