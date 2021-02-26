import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

function SingleProject({ projects }) {
  return (
    <>
      {projects.map((project) => {
        const fluid = project.photo.image.asset.fluid
        const name = project.name
        const id = project.id
        const slug = project.slug.current
        return (
          <div key={id}>
            <Link to={`/projects/${slug}`}>
              <h2>{name}</h2>
            </Link>
            <Img fluid={fluid} />
          </div>
        )
      })}
    </>
  )
}

export default function ProjectList({ projects }) {
  return (
    <>
      <SingleProject projects={projects} />
    </>
  )
}
