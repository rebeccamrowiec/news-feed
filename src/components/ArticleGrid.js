import React, {Component} from 'react';
import Article from './Article';

class ArticleGrid extends Component {
  render() {
    const contents = this.props.contents;
    console.log(this.props.contents);    

    return (
      <Article contents={contents} />
    );
  }
}

export default ArticleGrid;