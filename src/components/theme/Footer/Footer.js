import React from "react"

class Layout extends React.Component {
  render() {
    return (
      <div className="footer">
        <section className="icon-list">
          <a href="#" target="_blank"><i className="nes-icon twitter is-medium"></i></a>
          <a href="#" target="_blank"><i className="nes-icon github is-medium"></i></a>
          <a href="#" target="_blank"><i className="nes-icon gmail is-medium"></i></a>
          <a href="#" target="_blank"><i className="nes-icon linkedin is-medium"></i></a>
          <a href="#" target="_blank"><i className="nes-icon youtube is-medium"></i></a>
        </section>
        © {new Date().getFullYear()}, Scott Westover
      </div>
    )
  }
}

export default Layout
