import React from 'react';
import PropTypes from 'prop-types';
import { MESSAGES } from './Messages';

import './ErrorMessage.scss'

const ErrorMessage = ({message}) => {
  return (
    <p className="errorMessage__errorColor">
      {message ? message : MESSAGES.DEFAULT_MESSAGE}
    </p>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage