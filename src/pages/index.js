import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPageTemplate = ({
  title,
  backgroundimage,
  headline,
  subheadline,
  intro,
  profileimage,
  bodytext,
}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `1500px`, marginBottom: `1.45rem` }}>
      <img src={backgroundimage} alt="background" />
    </div>
    <h1>{headline}</h1>
    <h2>{subheadline}</h2>
    <p>{intro}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={profileimage} alt="Ryan" />
    </div>
    <div>{bodytext}</div>
    <Link to="/thank-you/">Go to the Thank You Page</Link>
  </Layout>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  subheadine: PropTypes.string,
  intro: PropTypes.string,
  backgroundimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  profileimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  bodytext: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <IndexPageTemplate
      title={frontmatter.title}
      backgroundimage={frontmatter.backgroundimage}
      headline={frontmatter.headline}
      subheadline={frontmatter.subheadline}
      intro={frontmatter.intro}
      bodytext={frontmatter.bodytext}
      profileimage={frontmatter.profileimage}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { title: { eq: "Home" } }) {
      frontmatter {
        title
        intro
        backgroundimage
        profileimage
        bodytext
        headline
        subheadline
      }
    }
  }
`
