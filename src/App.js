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

  function resetTodoHandler() {
    setTodo([]);
  }

  function resetCompletedTodoHandler() {
    setTodo(todo.filter((item) => !item.isCompleted));
  }

  const countCompletedTodo = todo.filter((item) => item.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm addTodo={handleChange} />
      {todo.length > 0 && (
        <TodoActions
          completedTodoExist={!!countCompletedTodo}
          resetTodo={resetTodoHandler}
          resetCompletedTodo={resetCompletedTodoHandler}
        />
      )}

      <TodoList
        todo={todo}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodo}
      />

      {countCompletedTodo > 0 && (
        <h2>
          {`You have completed ${countCompletedTodo} ${
            countCompletedTodo > 1 ? 'tasks' : 'task'
          }`}
        </h2>
      )}
    </div>
  );
}

export default App;
