import { useState } from "react"

const TodoNew = ({ addNewTodo }) => {
    const [inputValue, setInputValue] = useState("kenzongo")
    const handleOnChange = (value) => {
        setInputValue(value);
    }

    const handleOnClick = () => {
        addNewTodo(inputValue);
        setInputValue("");
    }
    return (
        <>
            <div className='todo-new'>
                <input
                    value={inputValue}
                    onChange={(e) => handleOnChange(e.target.value)}
                    type='text' placeholder='Enter your task' />
                <button onClick={handleOnClick}>Add</button>
            </div>
            <div style={{ marginTop: '10px' }}>
                My input value = {inputValue}
            </div>
        </>
    );
}

export default TodoNew;