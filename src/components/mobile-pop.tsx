import React from 'react'
import { css } from 'emotion'

const MobilePop: React.FC = () => (
  <div aria-label="mobile-pop" className={mobilePopCss}>
    <span className="hello-it-seems">
      Hello! <br />
      It seems like you are browsing this webpage without a keyboard or a mouse.{' '}
      <br />
      Better luck next time!
    </span>
  </div>
)

// -------
// STYLING
// -------

const mobilePopCss = css`
  display: table;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  .hello-it-seems {
    display: table-cell;
    font-size: 36px;
    line-height: 40px;
    padding: 0 20px;
    vertical-align: middle;
  }
`

export default MobilePop
