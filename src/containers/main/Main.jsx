import React from 'react'

import Header from '../../components/Header'
import Footer from './Footer'

const Main = props => (
  <div>
    <Header />
    {props.children}
    <Footer text="it is footer" />
  </div>
)

export default Main
