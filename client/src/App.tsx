import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

type Todo = {
  title: string;
  description: string;
  id: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string, description: string, id: string) {
    setTodos([
      ...todos,
      {
        title,
        description,
        id
      },
    ]);
  }

  function deleteTodo(id: string){
    const newValues = todos.filter((todo) => todo.id !== id)
    
    setTodos(newValues)
  }

  return (
    <>
      <Header HandleAddTodo={addTodo} />
      <main className="h-screen p-5 grid grid-cols-3 grid-rows-[400px_minmax(400px,_1fr)_100px] justify-items-center gap-4">
        {todos.map((todo: Todo) => (
          <CardContainer key={todo.id} handleDeleteTodo={() => deleteTodo(todo.id)} title={todo.title} description={todo.description} id={todo.id} />
        ))}
      </main>
    </>
  );
}
