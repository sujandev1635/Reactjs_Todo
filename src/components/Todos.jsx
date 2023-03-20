import React from 'react'
import Todo from "./Todo"

const Todos = (props) => {
  console.log(props.todos)
  return (
    <section className='todos1'>
      {props.todos.map((todo)=>(
        <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveItem={props.onRemoveTodo}/>
      ))}
    </section>
  )
}

export default Todos