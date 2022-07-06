import React, {useState, useEffect, useRef} from 'react'

function TodoForm({onSubmit}) {
const [input, setInput] = useState('');

const inputRef = useRef(null)

useEffect(() => {
	inputRef.current.focus()
})

const handleChange = e => {
	setInput(e.target.value);
}

// pas de rafraichissement si ras
const handleSubmit = e =>{
	e.preventDefault();

	onSubmit({
		id: Math.floor(Math.random() * 10000),
		text: input
	});
	setInput('');
};

  return (
	  <form className='todo-form' onSubmit={handleSubmit}> 
	  	<input 	type="text"
		  		placeholder='Add a todo' 
				value={input}
		  		name="text" 
				className='todo-input'
				onChange={handleChange}
				ref={inputRef} >
					
		</input>
		<button className='todo_button'>Add todo</button>
		</form>
  )
}

export default TodoForm