import React, {Component} from 'react';

import Article from './Article';

export default class ArticleList extends Component {
  render() {
    const {articles} = this.props;

    return (
      <table className="table-striped">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => {
            return (
              <Article key={article.id} {...article} />
            );
          })}
        </tbody>
      </table>
    );
  }
}
