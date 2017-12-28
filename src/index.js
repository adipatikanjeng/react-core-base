import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import { config } from 'dotenv'
config()

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <App />
  </LocaleProvider>,
document.getElementById('root'))
registerServiceWorker()
