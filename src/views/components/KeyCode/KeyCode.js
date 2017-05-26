/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  keyCode: PropTypes.number,
  keyText: PropTypes.string.isRequired,

  handleClick: PropTypes.func.isRequired
};

const defaultProps = {
  keyCode: null
};

const KeyCode = ({ keyCode, keyText, handleClick }) => (
  <div className="key-code">
    <span className="key-code-code">{ keyCode }</span>
    <span className="key-code-text" onClick={ handleClick }>{ keyText || 'What key code is that?' }</span>
  </div>
);

KeyCode.propTypes = propTypes;
KeyCode.defaultProps = defaultProps;

export default KeyCode;
