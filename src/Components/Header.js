import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <Menu inverted>
      <Menu.Item as='h1' >🌼 Flower Proj.🌺</Menu.Item>

      <Button.Group style={{height: 40, marginBottom: "auto", marginTop: "auto"}}>
        <Button as={NavLink} to="/flowers" color='green'>All Flowers</Button>
        <Button as={NavLink} to="/flowers/saved" color='blue'>Saved Flowers</Button>
        <Button as={NavLink} to="/flowers/new" color='purple'>New Flower</Button>
      </Button.Group>

    </Menu>
  )
}

export default Header