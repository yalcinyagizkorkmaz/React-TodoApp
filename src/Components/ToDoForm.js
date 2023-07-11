import React,{useState} from "react"
import '../App.css';

export const ToDoForm = ({addTodo}) =>{
    const[value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" value={value} className='todo-input' placeholder="What is the duty?" onChange={(e)=>setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
       
    )
}




