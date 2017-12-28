import React from 'react';
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      collapsed: this.props.collapsed
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }
  
  componentWillReceiveProps() {      
    let pathname = this.context.router.location.pathname
    const keys = pathname !== '/' ? [pathname.replace(/\//g,'')] : ['/'] 
    this.setState({ 
      selectedKeys: keys,
      collapsed: this.props.collapsed
    });
  }

  componentDidMount() {    
    let pathname = this.context.router.location.pathname
    const keys = pathname !== '/' ? [pathname.replace(/\//g,'')] : ['/'] 
    this.setState({ selectedKeys: keys });
  }

  render() {
    const { linkTo, collapsed, onCollapse} = this.props
    return (     
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={onCollapse}
          >
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            onClick={linkTo}
            selectedKeys={this.state.selectedKeys}
            >            
            <Menu.Item key="/">
              <Icon type="home"/>
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="login">
              <Icon type="login"/>
              <span>Login</span>
            </Menu.Item>            
          </Menu>
        </Sider>
             
    );
  }
}

export default LeftSide