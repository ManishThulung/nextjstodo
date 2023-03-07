import { Todo } from "@/type";
import { notFound } from "next/navigation";

type Params = {
  params: {
    todoId: string;
  };
};

async function TodoPage({ params: { todoId } }: Params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const data: Todo = await res.json();

  if (!data.id) return notFound();

  return (
    <div className="bg-purple-600 text-white m-4 p-6">
      <h3>{data.title}</h3>
      <p>list no: {data.id}</p>
      <p>Completed: {data.completed}</p>
      <hr />
      <p className="text-right">By user: {data.userId}</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
      <p className="p-12">hello</p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data: Todo[] = await res.json();

  return data.map((todo) => ({ todoId: todo.id.toString() }));
}

//[{todoId: 1}]
