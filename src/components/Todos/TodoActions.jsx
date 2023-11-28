import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

export default function TodoActions(props) {
  const { resetTodo, resetCompletedTodo, completedTodoExist } = props;
  //   console.log(completedTodoExist);
  return (
    <div className={styles.todoActionsContainer}>
      <Button title="Reset Todo" onclick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todo"
        onClick={resetCompletedTodo}
        disabled={!completedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
