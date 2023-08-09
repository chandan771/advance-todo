import AddTodo from '@/components/AddTodo';
import React from 'react';
import { RiTodoLine } from "react-icons/ri";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Todos } from '@/components/todos';


const page = () => {
  return (
    <main>
      <h2><RiTodoLine className="icons" />TODO Next + Typescript <RiTodoLine className="icons" /></h2>
       <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;