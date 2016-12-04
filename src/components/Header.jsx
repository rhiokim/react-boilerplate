import React from 'react';
import { Icon, Menu } from 'semantic-ui-react'
import {withRouter} from 'react-router';

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.router.push(`/${name}`);
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Icon name='gamepad' />
          Home
        </Menu.Item>

        <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>
          <Icon name='video camera' />
          Users
        </Menu.Item>

        <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>
          <Icon name='video play' />
          Articles
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Header);
