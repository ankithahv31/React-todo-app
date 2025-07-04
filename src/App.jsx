import InputContainer from './Components/InputContainer'
import './App.css'
import TodoContainer from './Components/TodoContainer'
import React ,{useState} from 'react'
import Todo from './Components/Todo'
function App() {
   const[inputVal,setinputVal]=useState('')
   const[todos,settodos]=useState([])

function writetodo(e){
  setinputVal(e.target.value)
}

function addtodo(){
if(inputVal!=''){
  settodos((prevtodos)=>[...prevtodos,inputVal])
  setinputVal('')
}

}
function delTodo(todoIndex){
  settodos((prevtodos)=> prevtodos.filter((prevtodos,prevTodoIndex)=>{
    return prevTodoIndex !=todoIndex;
  })
);
}
console.log(todos)
  return (
    <main>
      <h1>TO DO LIST</h1>
      <InputContainer inputVal={inputVal} writetodo={writetodo} addtodo={addtodo}/>
      <TodoContainer todos={todos} delTodo={delTodo}/>
     
    </main>
  )
}

export default App
