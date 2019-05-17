import React from 'react'
import { css } from 'emotion'

interface IKeyCodeProps {
  handleClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
  keyCode: number
  keyText?: string
}

const KeyCode: React.FC<IKeyCodeProps> = ({
  keyCode,
  keyText,
  handleClick = () => undefined,
}) => (
  <div className={keyCodeCss}>
    <span aria-label="key-code" className="key-code-code">
      {keyCode}
    </span>
    <button
      aria-label="key-code-code"
      className="key-code-text"
      onClick={handleClick}
    >
      {keyText || 'What key code is that?'}
    </button>
  </div>
)

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
`

export default KeyCode
