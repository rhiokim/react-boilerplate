import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="pane pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">Favorites</h5>
          <Link className="nav-group-item active" to="/">
            <span className="icon icon-home"></span>
            Home
          </Link>
          <Link className="nav-group-item" to="/users">
            <span className="icon icon-download"></span>
            Users
          </Link>
          <Link className="nav-group-item" to="/articles">
            <span className="icon icon-folder"></span>
            Articles
          </Link>
        </nav>
        <nav className="nav-group">
          <h5 className="nav-group-title">Tags</h5>
          <span className="nav-group-item" href="#">
            <span className="icon icon-record" style={{color: '#fc605b'}}></span>
            Red
          </span>
          <span className="nav-group-item" href="#">
            <span className="icon icon-record" style={{color: '#fdbc40'}}></span>
            Orange
          </span>
          <span className="nav-group-item" href="#">
            <span className="icon icon-record" style={{color: '#34c84a'}}></span>
            Green
          </span>
          <span className="nav-group-item" href="#">
            <span className="icon icon-record" style={{color: '#57acf5'}}></span>
            Blue
          </span>
        </nav>
        <nav className="nav-group">
          <h5 className="nav-group-title">Devices</h5>
          <span className="nav-group-item">
            <span className="icon icon-drive"></span>
            Backup disk
          </span>
          <span className="nav-group-item">
            <span className="icon icon-drive"></span>
            Backup disk
          </span>
          <span className="nav-group-item">
            <span className="icon icon-drive"></span>
            Backup disk
          </span>
          <span className="nav-group-item">
            <span className="icon icon-drive"></span>
            Backup disk
          </span>
        </nav>
      </div>
    );
  }
}
