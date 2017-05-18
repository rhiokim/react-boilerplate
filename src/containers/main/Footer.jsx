import React from 'react'

const Footer = ({text}) => {
  return <div>{text}</div>
}

Footer.propTypes = {
  text: React.PropTypes.string
}

export default Footer
