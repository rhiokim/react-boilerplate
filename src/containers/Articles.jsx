import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import {
  Layout, Header, Content, Footer, FooterSection,
  FooterLinkList
} from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

import * as ArticleActions from '../actions/article';
import ArticleList from '../components/articles/ArticleList';

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChange() {
  }

  render() {
    const {articles} = this.props;
    return (
      <div className={classNames('mdl-demo', 'mdl-base')}>
        <Helmet title="Containers" />
        <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>

          <Header className={classNames('demo-header', getColorClass('grey', 100), getTextColorClass('grey', 800))} title="Articles" scroll />
          <Content component="main">
            <ArticleList articles={articles} />

            <Footer size="mega">
              <FooterSection type="bottom" logo="More Information">
                <FooterLinkList>
                  <a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a>
                  <a href="#">Help</a>
                  <a href="#">Privacy & Terms</a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(ArticleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
