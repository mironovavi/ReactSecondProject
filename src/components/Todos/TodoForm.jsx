import { useState } from 'react';
import styles from './TodoForm.module.css';
console.log(styles);

export default function TodoForm(props) {
  const { addTodo } = props;
  const [text, setText] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    addTodo(text);
    setText(''); //обнуление значения в форме
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter new todo"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
