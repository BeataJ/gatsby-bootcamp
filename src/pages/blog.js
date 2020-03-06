import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              data
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up later on.</p>
    </Layout>
  )
}

export default BlogPage
