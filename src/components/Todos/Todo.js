import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
  return (
    <div
      title="Double click to delete"
      className={styles.todo}
      onDoubleClick={() => deleteTodo(index)}
    >
      <RiTodoFill className={styles.todoIcon} />
      <h3 className={styles.todoText}>{todo}</h3>
    </div>
  )
}
export default Todo
