import React, { Component } from 'react';
import BookList from './components/BookList/BookList';
import booksData from './mocks/bookData';
import SearchComponent from './components/SearchComponent';
import { NavbarComponent } from './components/NavbarComponent';
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
      booksDisplayList: booksData
    };
  }
  //TIP : if we use fat arrow functions, it will automatically bind the function to the class context so you dont need to bing seperatly
  handleNewSearch = searchKey => {
    const searchItem = searchKey.toLowerCase().trim();
    const booksDisplayList = this.state.books.filter(item => {
      const authorMatch = item.author.toLowerCase().indexOf(searchItem) !== -1;
      const titleMatch = item.title.toLowerCase().indexOf(searchItem) !== -1;
      return authorMatch || titleMatch;
    });

    this.setState({ booksDisplayList });
  };
  // The App class act as a parent component for communication between search and booklist component
  render() {
    const { booksDisplayList } = this.state;
    return (
      <section>
        <div className="container">
          <NavbarComponent />
          <SearchComponent handleNewSearch={this.handleNewSearch} />
          <BookList booksDisplayList={booksDisplayList} />
        </div>
      </section>
    );
  }
}
