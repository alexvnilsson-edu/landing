import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "core/brand/brand-full.png" }
      ) {
        childImageSharp {
          fixed(height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      className={className}
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

HeaderLogo.propTypes = {
  className: PropTypes.string,
}

HeaderLogo.defaultProps = {
  classNames: ``,
}

export default HeaderLogo
