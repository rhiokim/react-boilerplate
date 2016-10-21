import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import * as ArticleActions from '../actions/article';
import ArticleList from '../components/articles/ArticleList';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.handleChangeClientState = this.handleChangeClientState.bind(this);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChangeClientState(newState) {
    console.log(newState);
  }
  
  render() {
    const {articles} = this.props;
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
          title="Article List"
          titleTemplate="App - %s"
          defaultTitle="My Default Title"
          onChangeClientState={this.handleChangeClientState} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(ArticleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
