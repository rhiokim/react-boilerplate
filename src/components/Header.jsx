import React from 'react';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      current: 'mail'
    };
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/"><Icon type="mail" />Home</Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/users"><Icon type="mail" />Users</Link>
        </Menu.Item>
        <Menu.Item key="articles">
          <Link to="/articles"><Icon type="mail" />Articles</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
