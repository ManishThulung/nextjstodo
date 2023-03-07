import { Todo } from "@/type";
import Link from "next/link";
import React from "react";

async function TodoList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data: Todo[] = await res.json();
  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id} className="m-8">
          <Link href={`/todos/${todo.id}`}>
            <h3>{todo.title}</h3>
            <p>list no: {todo.id}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
