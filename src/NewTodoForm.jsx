import { useState } from "react"

export default function NewTodoForm(props) {
    
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();          /* prevents refresh everytime we submit */
        if(newItem==="") {return}
        props.onSubmit(newItem);
        
        setNewItem("")
    }

    return(
    <form onSubmit={handleSubmit} className="new-item-form" >
        <div className="form-row">
          <label htmlFor="">New To-Do</label>
          <br />
          <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)}/>
        </div>
        <button className="btn" type="submit">Add</button>
      </form>

    )

}