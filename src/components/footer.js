import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteCopyrightQuery {
      site {
        siteMetadata {
          copyright {
            year
            holder
          }
        }
      }
    }
  `)

  return (<div className="container">
    <footer>
      © {data.site.siteMetadata.copyright.year} {data.site.siteMetadata.copyright.holder}
    </footer>
  </div>)
}

export default Footer
