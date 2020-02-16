import React from 'react'
import { useWorks } from '../../hooks/use-works'

const Work = () => {
  const works = useWorks()

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {works.map(work => {
          return (
            <div key={work.title} className="work-item">
              <h1>{work.title}</h1>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: work.html }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
