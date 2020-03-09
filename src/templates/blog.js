import React from "react"
import { graphql } from "graphql"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>props.data.markdownRemark.frontmatter.title</h1>
    </Layout>
  )
}

export default Blog
