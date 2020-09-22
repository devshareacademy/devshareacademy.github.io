import React from "react"

import Layout from "../components/theme/layout"

class IndexPage extends React.Component {
  render() {
    const location = "Home"

    return (
      <Layout location={location} />
      // <Layout location={this.props.location} title={siteTitle}>
      //   <Nav />

      //   <h1>
      //     Hey people{" "}
      //     <span role="img" aria-label="wave emoji">
      //       👋
      //     </span>
      //   </h1>
      //   <p>Welcome to your new Gatsby website. You are on your home page.</p>
      //   <p>
      //     This starter comes out of the box with styled components and Gatsby's
      //     default starter blog running on Netlify CMS.
      //   </p>
      //   <p>Now go build something great!</p>
      //   <Link to="/blog/">
      //     <Button marginTop="35px">Go to Blog</Button>
      //   </Link>
      // </Layout>
    )
  }
}

export default IndexPage
