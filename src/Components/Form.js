import React, { useState } from 'react'

const Form = (props) => {

  const [name, setName] = useState('')

  const handlerChange = (e) =>{
    setName(e.target.value);
  };
  

  const handleSubmit = (e) =>{
    setName('')
    e.preventDefault()
    props.onSubmit(name)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={handlerChange}/>
      <button onClick={props.onSubmit}>add</button>
    </form>
  )
}

export default Form
