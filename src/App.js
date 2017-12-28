import React, { Component } from 'react'
import { Router, browserHistory, Route } from 'react-router'
import NotFound from './routes/Exception/404'
import Loader from './components/Loader'
import Loadable from 'react-loadable'
import './App.less'

function LoadableComponent (Component) {
  return Loadable({
    loader: () => import(`./routes/${Component}/index.js`), 
    loading: Loader
  })
}

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={LoadableComponent('Home')} />
        <Route path='/login' component={LoadableComponent('Login')} />
        <Route path='/profile' component={LoadableComponent('Profile')} />
        <Route path='/register' component={LoadableComponent('Register')} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

export default App
