"use client";
import { useTodo } from "@/app/context";
import React, { useState } from "react";

type Props = {};

const Todoform = () => {
  const [todos, settodos] = useState<string>("");
  const { addTodo } = useTodo();
  const add = (e: any) => {
    e.preventDefault();
    if (!todos) {
      return;
    }
    addTodo({
      text: todos,
      iscompeleted: false,
      id: `${Date.now()}`,
    });
    settodos("");
  };
  return (
    <div>
      <form action="" onSubmit={add}>
        <input
          type="text"
          value={todos}
          onChange={(e) => settodos(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default Todoform;
