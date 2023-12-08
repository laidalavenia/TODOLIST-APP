import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailPageAction from '../components/DetailPageAction';
import DetailPageBody from '../components/DetailPageBody';
import {  deleteTodo, getTodo} from '../utils/local-data';
import Page404 from './Page404';

function DetailPageWrapper() {
   const { id } = useParams();
   const navigate = useNavigate();

   return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         todo: getTodo(props.id),
      }

      this.onDeleteHandler = this.onDeleteHandler.bind(this);
   }



   onDeleteHandler(id) {
      deleteTodo(id);
      this.props.navigate('/');
   }

   render() {
      if (this.state.todo) {
         return (
            <section className='detail-page'>
               <DetailPageBody todo={this.state.todo} />
               <DetailPageAction id={this.props.id} onDelete={this.onDeleteHandler} />
            </section>
         )
      }
      return (
         <Page404 />
      )
   }
}

DetailPage.propTypes = {
   id: PropTypes.string,
   navigate: PropTypes.func,
}

export default DetailPageWrapper;