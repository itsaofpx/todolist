import { useEffect, useState } from "react";

interface Todo {
  title: string;
  description: string;
  status: string;
}

const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todo: Todo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const editTodo = (index: number, updatedTodo: Todo) => {
    setTodoList((prev) =>
      prev.map((todo, i) => (i === index ? updatedTodo : todo))
    );
  };

  const deleteTodo = (index: number) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  return { todoList, addTodo, editTodo, deleteTodo };
};

export default useTodoList;
