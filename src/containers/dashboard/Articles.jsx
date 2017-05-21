// @flow
/* sample */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import type { AppState } from '../../reducers'
import * as ArticleActions from '../../actions/article'
import ArticleList from '../../components/articles/ArticleList'

class Articles extends React.Component {
  componentWillMount () {
    this.props.fetchArticles()
  }

  handleChangeClientState (newState): void {
    console.log(newState)
  }

  render () {
    const { articles } = this.props
    return (
      <div>
        <ArticleList articles={articles} />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  articles: state.articleReducer.articles
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ArticleActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
