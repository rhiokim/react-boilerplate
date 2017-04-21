import React from 'react'

import './App.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      totalUserCount: 0
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
        {(() => {
          if (process.env.NODE_ENV === 'development') {
            const DevTools = require('../DevTools').default
            return <DevTools />
          }
        })()}
      </div>
    )
  }
}
