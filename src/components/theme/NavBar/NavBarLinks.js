import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)``

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="NavBarLink">About</NavItem>
      <NavItem to="/404" className="NavBarLink">Services</NavItem>
      <NavItem to="/" className="NavBarLink">Gallery</NavItem>
      <NavItem to="/404" className="NavBarLink">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
