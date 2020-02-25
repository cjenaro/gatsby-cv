import * as React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SEO from '../components/seo'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Experience from '../components/Experience'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import { usePosts } from '../hooks/use-posts'

function IndexPage(props) {
  const posts = usePosts()

  return (
    <Layout selectedLanguage={props.intl.locale}>
      <SEO title="Home" />
      <Hero />
      <Skills />
      <Experience />
      <Work />
      <Services />
      {posts.length > 1 && <Blog posts={posts} />}
      <Contact />
    </Layout>
  )
}

export default injectIntl(IndexPage)
