import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as ContactActions from '../actions/contact';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state = {
      name: '',
      age: undefined
    }
  }

  componentWillMount() {
    this.props.fetchContacts();
  }


  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.name +','+ this.state.age);
    e.preventDefault();
    this.props.putContact({
      name: this.state.name,
      age: this.state.age
    })
  }

  handleChangeInput(e) {
    const el = e.target
    const {name, value} = el

    this.setState({
      [name]: value
    })
  }

  render() {
    const {contacts} = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={this.state.name} onChange={this.handleChangeInput} type="text" />
          <input name="age" value={this.state.age} onChange={this.handleChangeInput} type="number" />

          <button type="submit">put</button>
        </form>
        <ul>
          {contacts.rows.map(item => (<li key={item.id}>{item.doc.name}/{item.doc.age}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contactReducer.contacts
});

const mapDispatchToProps = dispatch => bindActionCreators(ContactActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
