/* global pkginfo */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {Table} from 'antd';

import pkginfo from '../../package.json';

import * as ArticleActions from '../actions/article';
import ArticleList from '../components/articles/ArticleList';

const columns = [{
  title: 'Title',
  dataIndex: 'title',
  key: 'id',
  render: text => <a href="">{text}</a>
}, {
  title: 'Author',
  dataIndex: 'userId',
  key: 'userId'
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  },
};

class Articles extends Component {
  constructor(props) {
    super(props);

    this.handleChangeClientState = this.handleChangeClientState.bind(this);
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
    this.props.fetchArticles();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
    this.setState({
      loading: false
    })
  }

  handleChangeClientState(newState) {
    console.log(newState);
  }

  render() {
    const {articles} = this.props;
    const {loading} = this.state;
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
          title="Article List"
          titleTemplate="App - %s"
          defaultTitle="My Default Title"
          meta={[
            {name: 'description', content: pkginfo.description},
            {name: 'version', content: pkginfo.version},
            {name: 'hompage', content: pkginfo.hompage},
            {name: 'product', content: pkginfo.name},
            {name: 'keywords', content: pkginfo.keywords},
            {name: 'author', content: pkginfo.author},
            {name: 'license', content: pkginfo.license}
          ]}
          onChangeClientState={this.handleChangeClientState} />
        <Table
          loading={loading}
          columns={columns}
          dataSource={articles}
          expandedRowRender={record => <p>{record.body}</p>} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(ArticleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
