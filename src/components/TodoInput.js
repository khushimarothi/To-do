import React, {useState} from 'react'

const TodoInput = (props) => {
    const[inputText, setInputText] = useState('');
    const handleEnter = (e) =>{
        if(e.keyCode === 13){
            props.addList(inputText);
            setInputText("");
        }
    }
    return (
      <div className='input-container'>
          <input type="text" className='input-box-todo' placeholder='Enter To-Do'
          value={inputText}
          onChange = {e =>{
              setInputText(e.target.value)}}
              onKeyDown={handleEnter}
              />
          <button className='add-btn' onClick = {()=>{
            props.addList(inputText);
            setInputText('');
          }}>+</button>
          
          </div>
    )
}

export default TodoInput
