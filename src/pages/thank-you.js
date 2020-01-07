import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYouPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Thank You Page" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={data.image} alt="Thank You" />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ThankYouPage

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "thank-you" }
      }
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
