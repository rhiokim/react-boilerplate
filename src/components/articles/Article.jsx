import React from 'react';

export default class Article extends React.Component {
  render() {
    const {title} = this.props;

    return (
      <tr>
        <td onClick={this.props.onClick}>{title}</td>
      </tr>
    );
  }
}
