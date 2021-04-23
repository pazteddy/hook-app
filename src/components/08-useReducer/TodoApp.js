import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './style.css';
import { TodoList } from './TodoList';

const init = () =>{
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }];
  return JSON.parse(localStorage.getItem('todos')) || [];
};
  export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{description}, handleInputChange, reset] = useForm({ description:'' });
  console.log(" description ",description);

  console.log(todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify ( todos ));
  }, [todos]);

  const handleDelete = ( todoId ) =>{
    console.log(todoId);
    //crear accion
    const action = {
      type:'delete',
      payload: todoId
    };
    // dispatch
    dispatch( action );
  };

  const handleToggle = ( todoId ) =>{
    console.log("presiono");
    const action = {
      type:'toggle',
      payload: todoId
    };
    dispatch( action );
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    if ( description.trim().length <= 1){
      return;
    }
    console.log('Nueva tarea ');
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
    const action = {
      type:'add',
      payload: newTodo
    };
    dispatch( action );
    reset();
  };
  return (
    <div>
        <h1>TodoApp ( { todos.length } )</h1>
        <hr/>
        <div className="row">
          <div className="col-7">
            <TodoList 
              todos = { todos }
              handleDelete = {handleDelete}
              handleToggle = {handleToggle}
            />
          </div>
          <div className="col-5">
            <h4> Agregar TODO</h4>
            <hr/>
            <form onSubmit={ handleSubmit }>
              <input 
                 type="text"
                 name="description"
                 className="form-control"
                 placeholder="Aprender.."
                 autoComplete="off"
                 value={ description }
                 onChange={ handleInputChange }
              />
              <button
              type="submit"
              className="btn btn-outline-primary mt-1 col-12"
              >Agregar</button>
            </form>
          </div>
        </div>
    </div>
  )
}
