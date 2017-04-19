import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    keyCode: PropTypes.number,
    keyText: PropTypes.string.isRequired
};

const defaultProps = {
    keyCode: null
};

const KeyCode = ({ keyCode, keyText }) => (
    <div className="key-code">
        <span className="key-code-code">{ keyCode }</span>
        <span className="key-code-text">{ keyText || 'What key code is that?' }</span>
    </div>
);

KeyCode.propTypes = propTypes;
KeyCode.defaultProps = defaultProps;

export default KeyCode;
