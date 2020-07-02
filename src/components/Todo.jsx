import React from 'react';

const Todo = ({ todo , completedTodo , index , removeTodo}) => {
    return  (
        <div 
        className="Todo" 
        style={{ textDecoration:todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
        <div className="buttons">
            <button className="button-complete" onClick={() => completedTodo(index)}>
            Terminé</button>
            <button className="button-remove" onClick = {() => removeTodo(index) }>Supprimé</button>
            </div>
        </div>
    )
}
 
export default Todo;