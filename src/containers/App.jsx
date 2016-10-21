import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

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
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <Sidebar />
            <div className="pane">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
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
