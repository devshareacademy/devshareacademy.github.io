import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "./RecentCourses.css"

const RecentCourses = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "learn_js_course_thumb" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <div className="recent-courses">
      <h2 className="courseTitle">Recent Courses</h2>

      <div className="nes-container with-title">
        <p className="title">Learn JavaScript</p>
        <div className="course-image-container">
          <Img fluid={data.file.childImageSharp.fluid} alt="Learn JavaScript YouTube course" className="course-image" />
        </div>
        <p className="centered">In this course, we will go over the fundamentals of JavaScript including modern syntaxes like classes and arrow functions.</p>
        <div className="centered">
          <a href="https://www.youtube.com/watch?v=vcmGerkHyU4&list=PLmcXe0-sfoSgHQRKVWeJuIldauc9dL4rR" target="_blank" className="nes-btn is-primary" rel="noreferrer">Watch Now</a>
        </div>
      </div>
    </div>
  )
}

export default RecentCourses
