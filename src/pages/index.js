import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPageTemplate = ({
  title,
  featuredImage,
  headline,
  subHeadline,
  introduction,
  callToAction,
  profileImage,
  body,
}) => (
  <Layout>
    <SEO title="Landing Page" />
    <div style={{ maxWidth: `1500px`, marginBottom: `1.45rem` }}>
      <img src={featuredImage} alt="background" />
    </div>
    <h1>{headline}</h1>
    <h2>{subHeadline}</h2>
    <p>{introduction}</p>
    <div>
        <button>{callToAction}</button>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={profileImage} alt="Ryan" />
    </div>
    <div>{body}</div>
    <Link to="/thank-you/">Go to the Thank You Page</Link>
  </Layout>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  subHeadine: PropTypes.string,
  introduction: PropTypes.string,
  callToAction: PropTypes.string,
  featuredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  body: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <IndexPageTemplate
      title={frontmatter.title}
      featuredImage={frontmatter.featuredImage}
      headline={frontmatter.headline}
      subHeadline={frontmatter.subHeadline}
      introduction={frontmatter.introduction}
      callToAction={frontmatter.callToAction}
      body={frontmatter.body}
      profileImage={frontmatter.profileImage}
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
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      frontmatter {
        featuredImage
        body
        headline
        introduction
        callToAction
        profileImage
        subHeadline
        title
        templateKey
      }
    }
  }
`
