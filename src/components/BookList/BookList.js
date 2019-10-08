import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import './style.css';
/**
 * please see how folders has been created for compoents with its style
 * This is an example of a functional component , or state less component, which is for pure display or rendering no logic associated.
 * please refer https://reactjs.org/docs/components-and-props.html
 * and for state full component
 * please refer https://reactjs.org/docs/state-and-lifecycle.html
 */

const BookList = ({ booksDisplayList }) => {
  return (
    <section className="book-list">
      {booksDisplayList.map(item => (
        <Book key={item.id} info={item} />
      ))}
      {!booksDisplayList.length && <h2> Sorry no matching book found!</h2>}
    </section>
  );
};
export default BookList;

// Defining the proptypes and default props for a component is a best practice,please refer
//https://reactjs.org/docs/typechecking-with-proptypes.html
BookList.propTypes = {
  booksDisplayList: PropTypes.array
};

BookList.defaultProps = {
  booksDisplayList: []
};
