import React, {Component} from 'react';

import Article from './Article';

export default class ArticleList extends Component {
  render() {
    const {articles} = this.props;

    return (
      <div className="container">
        <h3>Articles</h3>
        <ul>
          {articles.map(article => {
            return (
              <Article key={article.id} {...article} />
            );
          })}
        </ul>
      </div>
    );
  }
}
