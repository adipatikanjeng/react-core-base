import React from 'react'
import PropTypes from 'prop-types'
import Layout from './../../layouts/BasicLayout'

class Home extends React.Component {
  render () {
    return (
      <Layout title='Home' children={
          'Home'
        } />
    )
  }
}

Home.propTypes = {
  children: PropTypes.object
}

export default Home
