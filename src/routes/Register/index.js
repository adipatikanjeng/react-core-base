import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import Layout from './../../layouts/BasicLayout'
import RegisterForm from './Form'

class Login extends React.Component {
  render () {
    return (
      <Layout title='Register' children={
        <Card style={{ maxWidth: 600 }}>
          <RegisterForm />
        </Card>
        } />
    )
  }
}

Login.propTypes = {
  children: PropTypes.object
}

export default Login
