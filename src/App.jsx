import { useCallback, useState } from "react"
import "./styles.css"

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

function handleSubmit(e) {
  e.preventDefault();          /* prevents refresh everytime we submit */

  setTodos(currentTodos => {
    return [
      ...todos, {id: crypto.randomUUID(), title: newItem, completed: false}
    ]
  })
  setNewItem("")
}

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">New To-Do</label>
          <br />
          <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)}/>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To-Do List</h1>
      <ul className="list">
        {todos.map(todo => {
          <li key={todo.id}>
            <label>
              <input type="checkBox" checked={todo.completed}/>  
              {todo.title}
            </label> 
            <button className="btn btn-danger">Delete</button> 
          </li> 

        })}
               

      </ul>
    </>
  )

}

export default App
