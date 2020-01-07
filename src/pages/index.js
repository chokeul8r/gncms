import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={data.profileimage} alt="Ryan" />
      </div>
      <Link to="/thank-you/">Go to the Thank You Page</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`
