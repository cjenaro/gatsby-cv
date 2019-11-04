import * as React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

function IndexPage({ intl }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        <FormattedMessage id="intro"></FormattedMessage>
      </h1>
      <Image />
    </Layout>
  )
}

export default injectIntl(IndexPage)
