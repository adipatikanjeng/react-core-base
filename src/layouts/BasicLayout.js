import React from 'react'
import PropTypes from 'prop-types'
import {Layout} from 'antd'
import './BasicLayout.less'
import './header.less'
import LeftSide from './../components/LeftSide'
import GlobalHeader from './../components/GlobalHeader'
import axios from 'axios'
import { Switch, BrowserRouter, Link } from 'react-router-dom';
import { createHashHistory } from 'history'
const history = createHashHistory()
const {Content, Footer} = Layout

class BasicLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedKeys: [],
      collapsed: false,
      currentUser: {}
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount () {
    let here = this
    axios.get('https://core-app-project.firebaseio.com/users/heriyadi.json', {
      // params: {
      //   access_token: AccessToken
      // }
    })
    .then(function (response) {
      here.setState({
        currentUser: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  linkTo (item) {
    history.push(item.key)
    // this.props.history.push(item.key)
    console.log(item)
  }

  render () {
    document.title = this.props.title + ' | Core App'
    const {children, title} = this.props

    return (
      <Layout>
        <LeftSide
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          linkTo={this.linkTo}
          />
        <Layout>
          <GlobalHeader
            title={title}
            currentUser={this.state.currentUser}
            linkTo={this.linkTo}
            toggle={this.toggle}
            collapsed={this.state.collapsed}
           />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 400
            }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {children}
            </div>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>
            App Core ©2018 Created with Love
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout
