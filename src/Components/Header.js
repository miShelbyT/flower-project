import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <Menu inverted>
      <Menu.Item as='h1' >🌼 Flower Proj.🌺</Menu.Item>

      <Menu.Item>
        <Button as={NavLink} to="/flowers" inverted color='green'>All Flowers</Button>
        <Button as={NavLink} to="/flowers/saved" inverted color='blue'>Saved Flowers</Button>
        <Button as={NavLink} to="/flowers/new" inverted color='purple'>New Flower</Button>
      </Menu.Item>

    </Menu>
  )
}

export default Header