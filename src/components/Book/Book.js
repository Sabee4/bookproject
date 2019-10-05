import React, { Component } from 'react';
import { TitleComponent } from '../TitleComponent';
import { AuthorComponent } from '../AuthorComponent';
import { ButtonComponent } from '../ButtonComponent';
import { ImageComponent } from '../ImageComponent';
import './style.css';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  lowerCount = () => {
    //count should not be negative.check count
    this.state.count <= 0
      ? this.setState({ count: 0 })
      : this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { img, title, author } = this.props.info; //get all the props
    return (
      <article className="book">
        <div className="flexcontainer">
          <div className="images">
            <ImageComponent img={img} />{' '}
          </div>
          <div className="titles">
            <TitleComponent title={title} />
            <div className="authors">
              {' '}
              <AuthorComponent author={author} />{' '}
            </div>
            <div className="buttons">
              {' '}
              <ButtonComponent />{' '}
            </div>
          </div>
        </div>
      </article>
    );
  }
}
