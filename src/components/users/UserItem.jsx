import React from 'react';
import {Col, Card} from 'antd';

export default class UserItem extends React.Component {
  render() {
    const {name, email} = this.props;

    return (
      <Col span={5} style={{margin: "8px"}}>
        <Card title={name} bordered={true}>{email}</Card>
      </Col>
    );
  }
}
