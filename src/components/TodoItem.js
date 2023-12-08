import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

function TodoItem({ id, title, createdAt, body }) {
   return (
      <article className="note-item">
         <h3 className="note-item__title">
            <Link to={`/todos/${id}`}>{title}</Link>
         </h3>
         <p className="note-item__createdAt">
            {showFormattedDate(createdAt)}
         </p>
         <p className="note-item__body">{(body)}</p>
      </article>
   );
}

TodoItem.propTypes = {
   id: PropTypes.string,
   title: PropTypes.string,
   createdAt: PropTypes.string,
   body: PropTypes.string,
}

export default TodoItem;