import React, { useState } from 'react'

const NewTodo = (props) => {
const [todo, setTodo] =useState({title:"",desc:""})
const {title, desc} =todo;


const handlerChanger =(e)=>{
  const name=e.target.name;
  setTodo((oldTodo)=>{
    return {...oldTodo, [name]:e.target.value}
  })
}
  const handelSubmit =(e)=>{
    e.preventDefault();
    props.onAddTodo(todo)
    setTodo({title:"", desc:""});
  }
  return (
    <form className='form' onSubmit={handelSubmit}>
      <div className='form-field'>
        <label htmlFor='title'>Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={handlerChanger}/>
      </div>
      <div className='form-field'>
        <label htmlFor='desc'>Description:</label>
        <textarea type="text" id="desc" name="desc" value={desc} onChange={handlerChanger}/>
      </div>
      <button type='submit' className='button'>Add Todo</button>
    </form>
  )
}

export default NewTodo