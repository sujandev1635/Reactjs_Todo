import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = (props) => {
  const {title,desc} =props.todo
  const {id} =props
  const handleDelete =(id)=>{
    props.onRemoveItem(id);
  }
  return (
    <article className='todo'>
      <div>
        <h3 className='hcolor'>{title}</h3>
        <p className='pclass'>{desc}</p>
        
      </div>
      <div >
        <button className='btn' onClick={()=>{handleDelete(id)}}><FaRegTrashAlt/>Add</button>
      </div>
    </article>
  )
}

export default Todo