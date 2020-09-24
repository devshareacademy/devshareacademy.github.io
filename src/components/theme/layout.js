import React from "react"

import "./layout.css"
import SEO from "../seo"
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div className="page-container">
        <SEO
          title={location}
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `devshareacademy`]}
        />
        <div className="content-wrap">
          <NavBar />
          <main className="page-content container">{children}</main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
