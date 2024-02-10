import React, { useState } from 'react'

const TodoApp = () => {
    const[todos, setTodos]=useState([]);
    const[newTodo, setNewTodo]=useState("");

const addHandler=()=>{
setTodos([...todos,{text:newTodo, checkbox:false}])
setNewTodo("");
}

const deleteHandler=(index)=>{
const newTodo=[...todos];
newTodo.splice(index,1);
setTodos(newTodo);
}


    return (
        <div>
            <input type="text"  value={newTodo} placeholder='text here...' onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={addHandler}>Add</button>
            <ul>
                {todos.map((el,index)=>(
                    <li key={index}>
                        <input type="checkbox" />
                        <span>{el.text}</span>
                        <button onClick={()=>deleteHandler(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp
