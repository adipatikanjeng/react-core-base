import React from 'react'
import { Layout, Menu, Icon, Spin, Dropdown, Avatar } from 'antd'
import './index.less'
import HeaderSearch from './../HeaderSearch'
const {Header} = Layout

class GlobalHeader extends React.Component {
  render () {
    document.title = this.props.title + ' | React App'
    const {title, currentUser, linkTo, toggle, collapsed} = this.props

    const menu = (
      <Menu className='menu' selectedKeys={[]} onClick={linkTo}>
        <Menu.Item key='profile'><Icon type='user' />Profile</Menu.Item>
        <Menu.Item key='setting'><Icon type='setting' />Setting</Menu.Item>
        <Menu.Divider />
        <Menu.Item key='logout'><Icon type='logout' />Logout</Menu.Item>
      </Menu>
    )

    return (
      <Header
        style={{
          background: '#fff',
          padding: 0
        }}>
        <Icon
          className='trigger'
          type={collapsed
              ? 'menu-unfold'
              : 'menu-fold'}
          onClick={toggle} />
        {title}
        <div className='right'>
          <HeaderSearch
            className='action search'
            placeholder='Search'
            dataSource={['Hello', 'Holla', 'Hell']}
            onSearch={(value) => {
                  console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={(value) => {
                  console.log('enter', value); // eslint-disable-line
            }}
              />
          {currentUser.name ? (
            <Dropdown overlay={menu}>
              <span className='action account'>
                <Avatar size='small' className='avatar' src={currentUser.avatar} />
                {currentUser.name}
              </span>
            </Dropdown>
          ) : <Spin size='small' style={{ marginLeft: 8 }} />}
        </div>
      </Header>
    )
  }
}

export default GlobalHeader
