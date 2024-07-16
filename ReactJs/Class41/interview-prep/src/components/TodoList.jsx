import { useState } from "react"

function Todos () {
    const [todos, setTodos] = useState([]);
    const handleTodoAdd = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value;
            const newTodo = {
                id: Math.random(),
                title: value,
            };
            setTodos((prevTodos) => [newTodo, ...prevTodos]);
        }
    }
    return (
        <div>
            <input placeholder="Enter new todo..." onKeyUp={handleTodoAdd}/>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;