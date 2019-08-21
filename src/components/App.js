import React, {Component} from 'react';
import ArticleGrid from './ArticleGrid';
// import './App.css';

class App extends Component {
  state = {
    articles: null
  }

  componentDidMount = async () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cd398d4021464bbbad3d825b2543c663';
    const req = new Request(url);
    const response = await fetch(req);
    const result = await response.json();
    this.setState({articles: result.articles});
  }

  render() {
    return (
      <div className="App">
        {!this.state.articles ? null : this.state.articles.map(article => {
          return(
            <ArticleGrid contents={article}/>
          );
        })}
      </div>
    );
  }
}

export default App;
