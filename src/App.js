import React from 'react';
import TaskList from './TaskList';
import ProductList from './ProductList';
import GuessGame from './GuessGame';
import './App.css';

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList />
      
      <h1>Shopping Cart System</h1>
      <ProductList />
      
      <h1>Number Guessing Game</h1>
      <GuessGame />
    </div>
  );
}

export default App;
