import React from 'react';

export default class Article extends React.Component {
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
