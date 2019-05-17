import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion'

import { App, MobilePop } from './components'
import { baseStyles } from './constants/base-styles'
import { isMobile } from './utils/isMobile'
import * as serviceWorker from './serviceWorker'

// Global Styles
injectGlobal(baseStyles)

declare var window: ICustomWindow

const uAVO = navigator.userAgent || navigator.vendor || window.opera

function conditionallyRenderApp() {
  return isMobile(uAVO) ? <MobilePop /> : <App />
}

// TODO: JS Meta Keys (CMD of MacOS).
ReactDOM.render(conditionallyRenderApp(), document.getElementById('root'))

serviceWorker.unregister()
