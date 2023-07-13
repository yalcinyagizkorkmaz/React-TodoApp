import React,{useState} from "react"
import '../App.css';

export const EdittodoForm = ({editTodo,task}) =>{
    const[value,setValue]= useState(task.task)
    const handleSubmit=e=>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    }
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" value={value} className='todo-input' placeholder="Update duty?" onChange={(e)=>setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
       
    )
}




