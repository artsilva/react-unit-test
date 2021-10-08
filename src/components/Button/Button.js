import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ isDisabled, onClick, text }) => {
  return (
    <button className={'search'} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}
