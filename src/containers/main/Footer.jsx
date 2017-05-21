import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({text}) => {
  return <div>{text}</div>
}

Footer.propTypes = {
  text: PropTypes.string
}

export default Footer
