import React, {useState} from 'react';


const TodoForm = ( {addTodo} ) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!todo) return; 
        addTodo(todo);
        setTodo("");
    };

    return (
        <form onSubmit = {handleSubmit}>
        <input 
        type ="text"
        className="input" 
        value={todo}
        onChange = {event => setTodo(event.target.value)}
        />
        <button type="submit"
         className="AddBtn">
        Ajouter
        </button>
        </form>
    );
};

export default TodoForm;