import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
import {
  Layout, Header, Content, Navigation,
  Icon, Grid, Cell, HeaderRow, Drawer
} from 'react-mdl';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalUserCount: 0
    };
  }

  render() {
    const props = this.props;

    return (
      <Layout>
        <Helmet
          title={process.env.APP_NAME}
          titleTemplate=" %s | React Boilerplate"
          meta={[
            {name: 'description', content: process.env.APP_DESCRIPTION},
            {name: 'version', content: process.env.APP_VERSION},
            {name: 'product', content: process.env.APP_NAME},
            {name: 'keywords', content: process.env.APP_KEYWORDS},
            {name: 'author', content: process.env.APP_AUTHOR},
            {name: 'license', content: process.env.APP_LICENSE}
          ]} />
        <Header>
          <HeaderRow title={<Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>React Boilerplate</Link>}>
            <Navigation>
              <Link to="b">Templates</Link>
              <a href="https://github.com/rhiokim/react-boilerplate">
                <Icon name="link" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  GitHub
              </a>
            </Navigation>
          </HeaderRow>
          <HeaderRow className="mdl-layout__header-second-menu">
            <Navigation>
              <Link to="/">Dashboard</Link>
              <Link to="/users">User</Link>
              <Link to="/articles">Article</Link>
            </Navigation>
          </HeaderRow>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="">Home</a>
            <a href="">Profile</a>
            <a href="">Hub</a>
            <a href="">Link</a>
          </Navigation>
        </Drawer>
        <Content className="mdl-color-text--grey-600 mdl-color--grey-50">
          <Grid noSpacing>
            <Cell col={12}>
              {props.children}
            </Cell>
          </Grid>
        </Content>
        {
          (() => {
            if (process.env.NODE_ENV === 'development') {
              const DevTools = require('../DevTools').default;
              return <DevTools />;
            }
          })()
        }
      </Layout>
    );
  }
}
