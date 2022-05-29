import React, { useState } from "react";
import {
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Input,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useQuery, useMutation } from "urql";

const TodosQuery = `
  query {
    todos {
      id
      title
    }
  }
`;

const AddTodosMutation = `
  mutation AddTodo ($title: String!) {
      addTodo(title: $title) {
          id
          title
      } 
  }
`;

export function Home() {
  const [todoField, setTodoField] = useState("");
  const [result, reexecute] = useQuery({
    query: TodosQuery,
  });
  const [, addTodo] = useMutation(AddTodosMutation);

  const createTodo = () => {
    addTodo({ title: todoField }).then((res) => {
      setTodoField("");
      reexecute();
    });
  };

  const { data } = result;
  return (
    <VStack p={10} spacing={5}>
      <Heading size="4xl">GLX Todo App</Heading>
      <Text>Welcome! This is GLX's ToDo app. Please add todos below.</Text>
      <VStack spacing={5} width={300}>
        <Box>
          <UnorderedList
            width={300}
            border="2px solid"
            p={2}
            data-test-id="todo-list"
          >
            {data?.todos.map((todo: any) => (
              <ListItem key={todo.id} data-test-id="todo-item">
                {todo.title}
              </ListItem>
            ))}
            {!data?.todos && <Text>No todos yet.</Text>}
          </UnorderedList>
        </Box>
        <HStack>
          <Input
            type="text"
            value={todoField}
            onChange={(e) => setTodoField(e.currentTarget.value)}
            width={200}
            data-test-id="new-todo"
          />
          <Button onClick={createTodo} data-test-id="create-button">
            Create Todo
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}
