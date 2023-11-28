import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoActions from './components/Todos/TodoActions';

function App() {
  const [todo, setTodo] = useState([]);

  function handleChange(text) {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodo([...todo, newTodo]);
  }

  function deleteTodoHandler(id) {
    // setTodo(todo.filter((item, idx) => idx !== index));
    setTodo(todo.filter((item) => item.id !== id));
  }

  function toggleTodo(id) {
    setTodo(
      todo.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={handleChange} />
      <TodoList
        todo={todo}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodo}
      />
      <TodoActions />
    </div>
  );
}

export default App;
