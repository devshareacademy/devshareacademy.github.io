import React from "react"

class Layout extends React.Component {
  render() {
    return (
      <div className="footer">
        <section className="icon-list">
          <a href="https://github.com/devshareacademy" target="_blank" rel="noreferrer">
            <i className="nes-icon twitter is-medium" aria-label="Twitter Profile Link"></i>
          </a>
          <a href="https://github.com/devshareacademy" target="_blank" rel="noreferrer">
            <i className="nes-icon github is-medium" aria-label="GitHub Profile Link"></i>
          </a>
          <a href="https://github.com/devshareacademy" target="_blank" rel="noreferrer">
            <i className="nes-icon gmail is-medium" aria-label="Gmail Link"></i>
          </a>
          <a href="https://github.com/devshareacademy" target="_blank" rel="noreferrer">
            <i className="nes-icon linkedin is-medium" aria-label="Linkedin Profile Link"></i>
          </a>
          <a href="https://github.com/devshareacademy" target="_blank" rel="noreferrer">
            <i className="nes-icon youtube is-medium" aria-label="YouTube Channel Link"></i>
          </a>
        </section>
        © {new Date().getFullYear()}, Scott Westover
      </div>
    )
  }
}

export default Layout
