import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => <li onClick={ () => this.props.dispatch(selectBook(book)) } key={ book.title }>{ book.title }</li>)
  }

  render() {
    return (
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { books: state.books }
}

export default connect(mapStateToProps)(BookList);
