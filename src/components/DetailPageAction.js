import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

function DetailPageAction({ id, onDelete }) {
  return (
    <div className="detail-page__action">
      <button className="action" type="button" title="Hapus" onClick={() => onDelete(id)}>
        <MdOutlineDelete />
      </button>
    </div>
  );
}

DetailPageAction.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default DetailPageAction;
