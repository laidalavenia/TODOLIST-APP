import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

function TodoItemList({ todos }) {
   if (!todos.length) {
      return (
         <section className="notes-list-empty">
            <p className="notes-list__empty">Catatan kosong</p>
         </section>
      )
   }

   return (
      <section className="notes-list">
         {todos.map((todo) => <TodoItem key={todo.id} id={todo.id} title={todo.title} createdAt={todo.createdAt} body={todo.body} />)}
      </section>
   );
}

TodoItemList.propTypes = {
   todos: PropTypes.arrayOf(PropTypes.object)
}

export default TodoItemList;
