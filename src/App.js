import React, { Component } from 'react'
import { Switch, HashRouter, Route, Router } from 'react-router-dom';
import NotFound from './routes/Exception/404'
import Loader from './components/Loader'
import Loadable from 'react-loadable'
// import { createHashHistory } from 'history'
// import Auth from '../src/auth'
import { createHistory } from 'history'
import './App.less'
const history = createHistory()

function LoadableComponent (Component) {
  return Loadable({
    loader: () => import(`./routes/${Component}/index.js`),
    loading: Loader
  })
}

class App extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={LoadableComponent('Home')} />
          <Route exact path='/login' component={LoadableComponent('Login')} />
          <Route exact path='/profile' component={LoadableComponent('Profile')} />
          <Route exact path='/register' component={LoadableComponent('Register')} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
