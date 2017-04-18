import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import * as AuthAction from '../actions/auth'

class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.handleInpuChange = this.handleInpuChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInpuChange (e: Event) {
    const el = e.target
    const value = el.value
    const name = el.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (e: Event) {
    const {email, password} = this.state
    const redirect = this.props.location.query.next
    e.preventDefault()

    this.props.loginUser(email, password, redirect)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isAuthenticated) {
      console.log(nextProps.redirect)
      // @TODO need to migrate with react-router@v4.x
      this.props.router.push(nextProps.redirect)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        email:
        {' '}
        <input
          name="email"
          type="email"
          onChange={this.handleInpuChange}
          placeholder="hello@test.com"
        />
        <br />
        password:
        {' '}
        <input
          name="password"
          type="password"
          onChange={this.handleInpuChange}
          placeholder="test"
        />
        <br />
        <button type="submit">submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  token: state.authReducer.token,
  isAuthenticated: state.authReducer.isAuthenticated,
  isAuthenticating: state.authReducer.isAuthenticating,
  redirect: state.authReducer.redirect
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
