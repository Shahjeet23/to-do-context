"use client";
import React, { useContext } from "react";
import { useState, useEffect, createContext } from "react";
export type todotypes = {
  id: string;
  text: string;
  iscompeleted: boolean;
};
export type todocontextypes = {
  todos: todotypes[];
  addTodo: (newtodo: todotypes) => void;
  removeTodo?: (id: string) => void;
  toggleTodo?: (id: string) => void;
  updatetodo?: (
    id: string,
    todo: { text: string; iscompeleted: boolean }
  ) => void;
};
export const TodoContex = createContext<todocontextypes>({
  todos: [
    {
      id: "1",
      iscompeleted: false,
      text: "addTodo",
    },
  ],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  toggleTodo: (id) => {},
  updatetodo: (id, todo) => {},
});
export const useTodo = () => {
  return useContext(TodoContex);
};

export const TodoProvider = TodoContex.Provider;
