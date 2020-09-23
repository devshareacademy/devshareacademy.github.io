import React from "react"

import Layout from "../components/theme/layout"
import RecentCourses from "../components/theme/RecentCourses/RecentCourses"

class IndexPage extends React.Component {
  render() {
    const location = "Home"

    return (
      <Layout location={location}>
        <RecentCourses />
      </Layout>
    )
  }
}

export default IndexPage
