import React from 'react';
import {Sidebar, Segment, Image, Header} from 'semantic-ui-react'

export default class Home extends React.Component {
  render() {
    return (
      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h3'>Home</Header>
          <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Sidebar.Pusher>
    );
  }
}
