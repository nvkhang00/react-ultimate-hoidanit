import { useState } from "react"

const TodoNew = ({ addNewTodo }) => {
    const [inputValue, setInputValue] = useState("")
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnClick = () => {
        addNewTodo(inputValue);
        setInputValue("");
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleOnClick();
        }
    }
    return (
        <>
            <div className='todo-new'>
                <input
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={handleOnChange}
                    type='text' placeholder='Enter your task' />
                <button
                    onClick={handleOnClick}>
                    Add
                </button>
            </div>
        </>
    );
}

export default TodoNew;