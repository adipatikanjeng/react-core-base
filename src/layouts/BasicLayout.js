import React from 'react';
import PropTypes from 'prop-types'
import {Layout} from 'antd';
import './BasicLayout.less';
import './header.less';
import LeftSide from './../components/LeftSide'
import GlobalHeader from './../components/GlobalHeader'
import {browserHistory} from 'react-router';
const {Content, Footer} = Layout;

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      collapsed: false
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
    console.log(!this.state.collapsed)
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  linkTo(item) {
    browserHistory.push(item.key);
  }

  render() {
    document.title = this.props.title + ' | React App'
    const {children, title} = this.props
    const currentUser = {
      name: 'Herry Heriyadi',
      avatar: 'images/avatar.jpg'
    }

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
           currentUser={currentUser}
           linkTo={this.linkTo}
           toggle={this.toggle}
           collapsed={this.state.collapsed}
           />
          <Content
            style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight:400
          }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            {children}
          </div>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>
            App Core ©2016 Created with Love
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout