import React, { useContext } from "react";
import TodosProvider, { TodosContext } from "./todosContext";

const Todos = () => {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
      <button onClick={() => addTodo("New Todo Added")}>Add Todo</button>
    </div>
  );
};

export default () => (
  <TodosProvider>
    <Todos />
  </TodosProvider>
);
