import React from 'react';
import PropTyes from 'prop-types';

function SearchTodo({ onSearch }) {
	return (
		<section className="search-bar">
			<input type="text" placeholder="Find your todos" onChange={(e) => onSearch(e.target.value)} />
		</section>
	)
}

SearchTodo.propTypes = {
	onSearch: PropTyes.func,
}

export default SearchTodo;