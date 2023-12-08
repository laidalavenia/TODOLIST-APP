import React from 'react';
import parser from 'html-react-parser';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

function DetailPageBody({ todo }) {
  return (
    <section>
      <h3 className="detail-page__title">{todo.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(todo.createdAt)}</p>
      <div className="detail-page__body" >{parser(todo.body)}</div>
    </section>
  )
}

DetailPageBody.propTypes = {
   todo: PropTypes.object,
}

export default DetailPageBody;