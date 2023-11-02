import { useState } from "react";

export default function TodoItem({completed, id, title, toggleTodo, deleteTodos}) {
    return(
        <li>
              <label>
                <input type="checkBox" checked={completed} onChange={e =>toggleTodo(id, e.target.checked)} />  
                {title}
              </label> 
              <button className="btn btn-danger" onClick={()=>deleteTodos(id)}>Delete</button> 
              {/* immer so machen: arrow function nötig:passing the function  --> sonst sofort gelöscht: delete sofort ausgeführt und result sofort gepassed-->  */}
        </li>
    )

}