import React from 'react';
import {Button} from 'react-toolbox';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Button icon='bookmark' label='Bookmark' accent />
        <Button icon='bookmark' label='Bookmark' raised primary />
      </div>
    );
  }
}
