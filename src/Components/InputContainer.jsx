import React ,{useState} from 'react'

function InputContainer ({inputVal,writetodo,addtodo}) {
   
  return (
    <div className='input-container'>
        <input type='text'value={inputVal} onChange={writetodo}/>
        <button onClick={addtodo}>+</button>
      </div>
  )
}

export default InputContainer