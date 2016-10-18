import React from 'react';
import {Grid, Cell} from 'react-mdl';

import Article from './Article';

export default class ArticleList extends React.Component {
  render() {
    const {articles} = this.props;

    return (
      <Grid component="section" className="section--center" shadow={0} noSpacing>
        <Cell col={12} tablet={12} phone={12}>
          <ul>
            {articles.map(article => {
              return (
                <Article key={article.id} {...article} />
              );
            })}
          </ul>
        </Cell>
      </Grid>
    );
  }
}
