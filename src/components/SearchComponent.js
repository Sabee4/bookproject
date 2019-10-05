import React, { Component } from 'react';
import PropTypes from 'prop-types';

//TODO: this can be converted to fucntional component try it.
//Tip : you can rceive the searchKey also as prop from parent(here App component)
export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ' '
    };
  }

  updateSearch(event) {
    const newSearch = event.target.value.substr(0, 20);
    this.setState({ searchKey: newSearch });
    this.props.handleNewSearch(newSearch);
  }

  render() {
    const { searchKey } = this.state;
    return (
      <section className="book-list__padding">
        <div className="book-list__form-group">
          <input
            type="text"
            className="book-list__search"
            placeholder="Search for Collection"
            value={searchKey}
            onChange={this.updateSearch.bind(this)}
          />
        </div>{' '}
      </section>
    );
  }
}
//You can chain a proptype with `isRequired` to make sure a warning
// is shown if the prop isn't provided.
SearchComponent.propTypes = {
  handleNewSearch: PropTypes.func.isRequired
};

SearchComponent.defaultProps = {};
