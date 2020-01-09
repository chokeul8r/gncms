import React from "react"
import PropTypes from "prop-types"
import { ThankYouPageTemplate } from "../../pages/thank-you"

const ThankYouPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <ThankYouPageTemplate
        title={frontmatter.title}
        headline={frontmatter.headline}
        outtro={frontmatter.outtro}
        profileImage={frontmatter.profileImage}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ThankYouPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ThankYouPagePreview
