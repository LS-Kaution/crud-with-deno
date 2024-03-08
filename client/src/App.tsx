import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

type Todo = {
  title: string;
  description: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string, description: string) {
    setTodos([
      ...todos,
      {
        title,
        description,
      },
    ]);
  }

  return (
    <>
      <Header HandleAddTodo={addTodo} />
      <main className="h-screen p-5 grid grid-cols-3 grid-rows-[400px_minmax(400px,_1fr)_100px] justify-items-center gap-4">
        {todos.map((todo: Todo) => (
          <CardContainer title={todo.title} description={todo.description} />
        ))}
      </main>
    </>
  );
}
