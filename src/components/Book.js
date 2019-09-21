import React, { Component } from "react";
import { TitleComponent } from './TitleComponent';
import { AuthorComponent } from './AuthorComponent';
import { ButtonComponent } from './ButtonComponent';
import { ImageComponent } from './ImageComponent';
 
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
    this.state.count<=0?(this.setState({ count: 0 })):this.setState({ count: this.state.count - 1 })
    
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { img, title, author } = this.props.info; //get all the props
    const { functionAdd } = this.addCount;
    return (
      <article className="book">        
        <ImageComponent img={img}/>   
        <div>
          <TitleComponent title={title}/>         
          <AuthorComponent author={author}/>   
           <ButtonComponent />     
        </div> 
      </article>
    
    );
  }
}
