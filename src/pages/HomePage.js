import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import HomePageAction from '../components/HomePageAction';
import TodoItemList from '../components/TodoItemList';
import SearchTodo from '../components/SearchTodo';
import { getActiveTodos, searchTodos } from '../utils/local-data';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import store  from '../../src/redux/index';

function HomePageWrapper() {
  const globalState = useSelector(state => state);
  console.log('state global: ', globalState);
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <HomePage onSearch={changeSearchParams} defaultKeyword={title} />;
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getActiveTodos(),
      keyword: props.defaultKeyword || '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({ keyword });

    this.props.onSearch(keyword);
  }

  render() {
    const todos = searchTodos(this.state.todos, this.state.keyword);
    return (
      <section className="homepage">
        <h2>Search </h2>
        <SearchTodo onSearch={this.onSearch} />
        <TodoItemList todos={todos} />
        <HomePageAction />
      </section>
    );
  }
}

HomePage.propTypes = {
  onSearch: PropTypes.func,
  defaultKeyword: PropTypes.string,
};

export default HomePageWrapper;
