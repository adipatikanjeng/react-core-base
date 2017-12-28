import React from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
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
              prefix={< Icon type = "email" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
              placeholder="Email"/>
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
              prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
              type="password"
              placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>

        
        <Button
          type="primary"
          htmlType="submit"
          style={{
          width: '100%'
        }}>
          <Icon type="login"/>Login
        </Button>        
        <Button 
        type="primary" 
        style={{
          width: '100%'
        }}>
          <Icon type="facebook" />Facebook
        </Button>
        <Button 
        type="primary" 
        style={{
          width: '100%'
        }}>
          <Icon type="google" />Google
        </Button>
        Or <a href="/register">register now!</a>
        </FormItem>        
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm