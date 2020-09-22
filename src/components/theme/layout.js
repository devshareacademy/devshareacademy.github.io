import React from "react"

import "./layout.css"
import SEO from "../seo"
import NavBar from "./NavBar/NavBar"

class Layout extends React.Component {
  render() {
    const { location } = this.props

    return (
      <div>
        <SEO
          title={location}
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `devshareacademy`]}
        />
        <NavBar />
        <p> some text </p>
        <h2> some more</h2>
      </div>
    )
  }
}

export default Layout
