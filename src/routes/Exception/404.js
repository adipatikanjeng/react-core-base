import React from 'react'
import Exception from '../../components/Exception'
import Layout from './../../layouts/BasicLayout'

export default () => (
  <Layout title='404' children={
    <Exception type='404' style={{ minHeight: 500, height: '80%' }} />
  } />
)
