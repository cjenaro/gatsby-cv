import * as React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"
import Skills from '../components/Skills/Skills'

function IndexPage(props) {
  return (
    <Layout selectedLanguage={props.location.pathname.split('/')[1]}>
      <SEO title="Home" />
      <Hero />
      <Skills />
      <Image />
    </Layout>
  )
}

export default injectIntl(IndexPage)
