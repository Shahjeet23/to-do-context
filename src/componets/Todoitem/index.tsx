"use client";
import { useTodo } from "@/app/context";
import React, { useState } from "react";

type Props = {
  id: string;
  text: string;
  iscompeleted: boolean;
};

const TodoItem = ({ todo }: { todo: Props }) => {
  const { todos, removeTodo, toggleTodo, updatetodo } = useTodo();
  const [update, setupdate] = useState(todo.text);
  const [toggle, settoggle] = useState(false);

  const edittodo = () => {
    updatetodo(todo.id, { ...todo, text: update });
  };
  const toggletodo = () => {
    toggleTodo(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.iscompeleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.iscompeleted}
        onChange={toggleTodo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          toggle ? "border-black/10 px-2" : "border-transparent"
        } ${todo.iscompeleted ? "line-through" : ""}`}
        value={update}
        onChange={(e) => setupdate(e.target.value)}
        readOnly={!toggle}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.iscompeleted) return;

          if (toggle) {
            edittodo();
          } else settoggle((prev) => !prev);
        }}
        disabled={todo.iscompeleted}
      >
        {toggle ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};
export default TodoItem;
