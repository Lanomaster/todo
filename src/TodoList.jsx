import { useState } from "react";

function TodoList({todos ,toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length === 0 && "No To-Dos"}
            {todos.map(todo => {

                return(
                <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            )
            }
            


            )}
               

        </ul>
    )
    
}

export default TodoList