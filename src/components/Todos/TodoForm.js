import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setTetxt] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setTetxt('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={(e) => setTetxt(e.target.value)}
          placeholder="Enter new todo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default TodoForm
