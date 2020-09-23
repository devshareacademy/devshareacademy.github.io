import React from "react"

import "./layout.css"
import SEO from "../seo"
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"

class Layout extends React.Component {
  render() {
    const { location } = this.props

    return (
      <div className="page-container">
        <SEO
          title={location}
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `devshareacademy`]}
        />
        <NavBar />
        <div className="content-wrap">
          <p> some text </p>
          <h2> some more</h2>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
