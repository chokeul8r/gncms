import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYouPageTemplate = ({ title, headline, outtro, profileimage }) => (
  <Layout>
    <SEO title="Thank You Page" />
    <h1>{headline}</h1>
    <p>{outtro}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={profileimage} alt="Thank You" />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

ThankYouPageTemplate.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  outtro: PropTypes.string,
  profileimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ThankYouPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ThankYouPageTemplate
      title={frontmatter.title}
      headline={frontmatter.headline}
      outtro={frontmatter.outtro}
      profileimage={frontmatter.profileimage}
    />
  )
}

ThankYouPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ThankYouPage

export const pageQuery = graphql`
  query ThankYouPageTemplate {
    markdownRemark(frontmatter: { title: { eq: "Thank-You" } }) {
      frontmatter {
        title
        headline
        outtro
        profileimage
      }
    }
  }
`
