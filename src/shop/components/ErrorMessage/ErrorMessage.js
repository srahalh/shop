import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.scss'

const ErrorMessage = ({message}) => {
  return (
    <p className="errorMessage__errorColor">
      {message}
    </p>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage