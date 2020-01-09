import React from "react"
import PropTypes from "prop-types"
import { IndexPageTemplate } from "../../pages/index"

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
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
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
