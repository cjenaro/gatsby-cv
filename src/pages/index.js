import * as React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage({ t }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>"intro"</h1>
      <Image />
    </Layout>
  )
}

export default IndexPage
