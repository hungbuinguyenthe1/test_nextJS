"use client";
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";
function Home() {
  const [todos, setTodos] = React.useState([
    { title: "Some task", id: self.crypto.randomUUID(), is_completed: false },
    // add other dummy data
  ]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form />
      <TODOList todos={todos} />
    </div>
  );
}
export default Home;