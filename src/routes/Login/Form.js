import React from 'react'
import {Form, Icon, Input, Button, Checkbox, Spin} from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {login} from './../../actions/login'
const FormItem = Form.Item

const antIcon = <Icon type='loading' style={{ fontSize: 14 }} spin />

class NormalLoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.props.login(values.email, values.password, values.remember)
        }
      })
  }
  render () {
    const {getFieldDecorator} = this.props.form

    let {isLoginPending, loginError} = this.props
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Please input your email!'
              }
            ]
          })(
            <Input
              prefix={<Icon type='email' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Email' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='Password' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className='login-form-forgot' href=''>Forgot password</a>

          <Button
            type='primary'
            htmlType='submit'
            style={{
              width: '100%'
            }}>
            {isLoginPending ? (
              <Spin indicator={antIcon} />
            ) : <Icon type='login' /> }
          </Button>
          { loginError && <div>{loginError.message}</div> }
          <Button
            type='primary'
            style={{
              width: '100%'
            }}>
            <Icon type='facebook' />Facebook
        </Button>
          <Button
            type='primary'
            style={{
              width: '100%'
            }}>
            <Icon type='google' />Google
        </Button>
        Or <Link to='/register'>register now!</Link>
        </FormItem>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, remember) => dispatch(login(email, password, remember))
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
