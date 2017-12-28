import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import Layout from './../../layouts/BasicLayout'
import LoginForm from './Form'

class Login extends React.Component {
  render () {
    return (
      <Layout title='Login' children={
        <Card style={{ maxWidth: 300 }}>
          <LoginForm />
        </Card>
        } />
    )
  }
}

Login.propTypes = {
  children: PropTypes.object
}

export default Login
