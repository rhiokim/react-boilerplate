import React, {Component} from 'react';

export default class Article extends Component {
  render() {
    const {title, body} = this.props;

    return (
      <div>
        <b>{title}</b>
        <p>{body}</p>
      </div>
    );
  }
}
