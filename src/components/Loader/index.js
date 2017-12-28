import React from 'react'
import { Spin } from 'antd'
import './index.less'

class Loader extends React.Component {
  render () {
    return (
      <div className='loader'>
        <Spin />
      </div>
    )
  }
}

export default Loader
