// ref - https://github.com/react-component/checkbox/blob/master/src/Checkbox.jsx
import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick({
      target: {...this.props},
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      }
    });
  }

  render() {
    const props = {...this.props};

    return (
      <button {...props} onClick={this.handleClick}>{props.value}</button>
    );
  }
}
