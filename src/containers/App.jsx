import React from 'react';
import {Container} from 'semantic-ui-react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalUserCount: 0
    };
  }

  render() {
    return (
      <Container>
        <Header />
          <Container>
          {this.props.children}
          </Container>
        <Footer />
        {
          (() => {
            if (process.env.NODE_ENV === 'development') {
              const DevTools = require('../DevTools').default;
              return <DevTools />;
            }
          })()
        }
      </Container>
    );
  }
}
