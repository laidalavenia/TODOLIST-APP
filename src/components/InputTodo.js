import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';
import Form from 'react-bootstrap/Form';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onInputHandler(event) {
    this.setState({ body: event.target.innerHTML });
  }

  onSubmitHandler() {
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <Form>
          <Form.Group className="mb-3 add-new-page__input">
            <Form.Label>Judul Todos</Form.Label>
            <Form.Control className="add-new-page__input__title" type="text" placeholder="Masukkan judul disini" value={this.state.title} onChange={(e) => this.onTitleChange(e)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Isi Todos</Form.Label>
            <div className="add-new-page__input__body" contentEditable data-placeholder="Isi todos kamu disini" onInput={(e) => this.onInputHandler(e)}></div>
            {/* <Form.Control className="add-new-page__input__body" as="textarea" rows={3} contentEditable data-placeholder="Isi todos kamu disini" onInput={(e) => this.onInputHandler(e)} /> */}
          </Form.Group>
        </Form>
        <div className="add-new-page__action">
          <button className="action" type="button" title="Simpan" onClick={this.onSubmitHandler}>
            <FiCheck />
          </button>
        </div>
      </section>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func,
};

export default TodoInput;
