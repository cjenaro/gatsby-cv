import * as React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import Work from "../components/Work"

function IndexPage(props) {
  return (
    <Layout selectedLanguage={props.intl.locale}>
      <SEO title="Home" />
      <Hero />
      <Skills />
      <Work />
    </Layout>
  )
}

export default injectIntl(IndexPage)
