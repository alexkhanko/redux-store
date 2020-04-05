import React, { Component } from 'react';
import { fetchBooks, bookAddedToCart } from "../../actions";
import compose from "../../utils/compose";
import withBookstoreService from "../../components/hoc/with-bookstore-service";
import {connect} from "react-redux";

import Spinner from '../../components/spinner/spinner';
import ErrorIndicator from '../../components/error-indicator/error-indicator';
import BookList from '../../components/book-list/book-list';

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }
    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
