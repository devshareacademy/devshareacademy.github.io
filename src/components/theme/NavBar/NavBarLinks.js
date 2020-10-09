import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)``

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/blog" className="NavBarLink">Blog</NavItem>
      <NavItem to="/courses" className="NavBarLink">Courses</NavItem>
      <NavItem to="/404" className="NavBarLink">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
