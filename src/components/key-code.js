/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const propTypes = {
  keyCode: PropTypes.number,
  keyText: PropTypes.string.isRequired,

  handleClick: PropTypes.func.isRequired
};

const defaultProps = {
  keyCode: null
};

const KeyCode = ({ keyCode, keyText, handleClick }) => (
  <div className={keyCodeCss}>
    <span className="key-code-code">{keyCode}</span>
    <span className="key-code-text" onClick={handleClick}>
      {keyText || 'What key code is that?'}
    </span>
  </div>
);

KeyCode.propTypes = propTypes;
KeyCode.defaultProps = defaultProps;

// -------
// STYLING
// -------

const keyCodeCss = css`
  display: table-cell;
  vertical-align: middle;

  .key-code-code {
    display: block;
    font-size: 300px;
    line-height: 320px;
    padding-bottom: 40px;
  }

  .key-code-text {
    background: #eff0f2;
    border-radius: 4px;
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow: inset 0 0 25px #e8e8e8, 0 1px 0 #c3c3c3, 0 2px 0 #c9c9c9,
      0 2px 3px #333;
    color: #aaa;
    cursor: pointer;
    display: inline-block;
    font: 38px/40px 'Helvetica Neue';
    font-weight: bold;
    margin: 0;
    padding: 15px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
  }
`;

export default KeyCode;
