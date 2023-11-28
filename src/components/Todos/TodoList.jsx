import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList(props) {
  const { todo, deleteTodo, toggleTodo } = props;
  return (
    <div className={styles.todoListContainer}>
      {!todo.length ? (
        <h2>TodoList is Empty</h2>
      ) : (
        // todo.map((item, index) => (
        //   <Todo todo={item} key={index} deleteTodo={deleteTodo} idx={index} />
        // ))
        todo.map((item) => (
          <Todo
            todo={item}
            key={item.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      )}
    </div>
  );
}
