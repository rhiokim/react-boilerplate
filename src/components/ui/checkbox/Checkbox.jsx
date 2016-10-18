import {Component, PropTypes} from 'react';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    console.log('not implement yet');
  }
}

Checkbox.propTypes = {
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  className: PropTypes.string,
  defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  style: {},
  type: 'checkbox',
  className: '',
  defaultChecked: false,
  onChange: () => {},
};
