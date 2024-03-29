"use client";
import Image from "next/image";
import { TodoProvider } from "./context";
import React, { useEffect, useState } from "react";
import { TodoContex } from "./context";
import TodoItem from "@/componets/Todoitem";
import Todoform from "@/componets/Todoform";
export default function Home() {
  const [todos, settodos] = useState<
    Array<{ id: string; text: string; iscompeleted: boolean }>
  >([]);
  const addTodo = (todo: any) => {
    settodos((prev) => [{ id: `${Date.now()}`, ...todo }, ...prev]);
  };
  const removeTodo = (id: string) => {
    settodos((prev) => prev.filter((item) => item.id !== id));
  };
  const updatetodo = (
    id: string,
    todo: { iscompeleted: boolean; text: string }
  ) => {
    settodos(
      (prev: Array<{ id: string; text: string; iscompeleted: boolean }>) =>
        prev.map((item: any) => (item.id === id ? { id, ...todo } : item))
    );
  };
  const toggleTodo = (id: string) => {
    settodos((prev: any) =>
      prev.map((item: any) => {
        item.id === id ? { ...item, iscompeleted: !item.iscompeleted } : item;
      })
    );
  };
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length) {
      settodos(todo);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // console.log(TodoContex);
  // console.log(localStorage);

  return (
    <TodoProvider
      value={{ todos, addTodo, updatetodo, removeTodo, toggleTodo }}
    >
      <Todoform />
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </TodoProvider>
  );
}
