import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'antd'
import Layout from './../../layouts/BasicLayout'
const { Meta } = Card

class Profile extends React.Component {
  render () {
    return (
      <Layout title='Profile' children={
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt='example' src='/images/avatar.jpg' />}
          actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}
      >
          <Meta
            title='Herry Heriyadi'
            description='Programmer'
        />
        </Card>
        } />
    )
  }
}

Profile.propTypes = {
  children: PropTypes.object
}

export default Profile
