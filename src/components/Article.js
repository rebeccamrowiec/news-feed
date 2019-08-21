import React, {Component} from 'react';

class Article extends Component {
  render() {
    const {title, author, description, content} = this.props.contents;
    console.log(this.props.contents);    
    
    return (
      <div style={{border: "1px solid black", padding: 10}}>
        <h1>{title}</h1>
        <h2>{author}</h2>
      </div>
    );
  }
}

export default Article;