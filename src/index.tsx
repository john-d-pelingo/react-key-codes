import { injectGlobal } from 'emotion'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Main } from './components/Main'
import { MobilePop } from './components/MobilePop'
import { baseStyles } from './constants/baseStyles'
import * as serviceWorker from './serviceWorker'
import { isMobile } from './utils/isMobile'

// Global Styles
injectGlobal(baseStyles)

declare var window: ICustomWindow

const uAVO = navigator.userAgent || navigator.vendor || window.opera

function conditionallyRenderApp() {
  return isMobile(uAVO) ? <MobilePop /> : <Main />
}

ReactDOM.render(conditionallyRenderApp(), document.getElementById('root'))

serviceWorker.unregister()
