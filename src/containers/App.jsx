import React from 'react';
import {Row, Col} from 'antd';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
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
      <div>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col span={4}>
            <Sidebar />
          </Col>
          <Col span={20} style={{padding: '10px'}}>
            {this.props.children}
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
        {
          (() => {
            if (process.env.NODE_ENV === 'development') {
              const DevTools = require('../DevTools').default;
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
