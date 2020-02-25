import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { usePosts } from '../../hooks/use-posts'
import { Link } from 'gatsby'
import { StyledSection } from '../../common-styles/styles'
import Img from 'gatsby-image'

const StyledBlogs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  margin-top: 50px;
  grid-gap: 20px;

  .post {
    &__footer {
      background-color: ${props => props.theme.hl};
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      font-weight: 400;
      margin-top: -59px;
      position: relative;

      a {
        color: #ffffff;
      }
    }
  }
`

const Blog = () => {
  const posts = usePosts()

  return (
    <StyledSection id="blog">
      <h2 className="title">
        <FormattedMessage id="BLOG"></FormattedMessage>
      </h2>
      <StyledBlogs>
        {posts.map(post => (
          <div className="post" key={post.slug}>
            <Img fluid={post.image} alt={post.title} />
            <div className="post__footer">
              <em>
                <span>{post.date}</span>
              </em>
              <Link to={post.slug}>Read More &rarr;</Link>
            </div>
          </div>
        ))}
      </StyledBlogs>
    </StyledSection>
  )
}

export default Blog
