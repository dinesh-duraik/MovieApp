import React from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu } from 'antd'

export default function Navbar () {
  return (
    <Menu mode='horizontal'>
      <Menu.Item >
        <Link to='/'> Tab 1 </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='popular'> Tab 2 </Link>
      </Menu.Item>
    </Menu>
  )
}
