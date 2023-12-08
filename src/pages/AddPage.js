import React from 'react';
import InputTodo from '../components/InputTodo';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../utils/local-data';

function AddPage() {
  const navigate = useNavigate();

  function onAddTodoHandler(todo) {
    addTodo(todo);
    navigate('/');
  }

  return (
    <InputTodo addTodo={onAddTodoHandler} />
  )
}

export default AddPage