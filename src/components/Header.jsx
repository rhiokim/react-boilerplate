import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header className="toolbar toolbar-header">
        <h1 className="title">React boilerplate with Photonkit for nwjs</h1>

        <div className="toolbar-actions">
          <div className="btn-group">
            <Link className="btn btn-default" to="">
              <span className="icon icon-home"></span>
            </Link>
            <Link className="btn btn-default" to="">
              <span className="icon icon-folder"></span>
            </Link>
            <Link className="btn btn-default" to="">
              <span className="icon icon-cloud"></span>
            </Link>
            <Link className="btn btn-default" to="/form">
              <span className="icon icon-popup"></span>
            </Link>
            <button className="btn btn-default">
              <span className="icon icon-shuffle"></span>
            </button>
          </div>

          <button className="btn btn-default">
            <span className="icon icon-home icon-text"></span>
            Filters
          </button>

          <button className="btn btn-default btn-dropdown pull-right">
            <span className="icon icon-megaphone"></span>
          </button>
        </div>
      </header>
    );
  }
}
