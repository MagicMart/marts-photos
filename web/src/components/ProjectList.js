import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ProjectListStyles = styled.div`
  display: grid;
  --size: 140px;
  grid-template-columns: var(--size) var(--size);
  grid-gap: 1rem;
  justify-content: space-evenly;
  @media (min-width: 600px) {
    --size: 250px;
    grid-template-columns: repeat(auto-fill, var(--size));
    grid-gap: 4rem;
  }
`

const SingleProjectStyles = styled.div`
  display: grid;
  grid-template-rows: auto var(--size);
  text-align: center;
  h2 {
    font-size: 2rem;
    padding: 0.5em 0;
  }
`

function SingleProject({ projects }) {
  return (
    <>
      {projects.map((project) => {
        const fluid = project.photo.image.asset.fluid
        const name = project.name
        const id = project.id
        const slug = project.slug.current
        return (
          <SingleProjectStyles role="listitem" key={id} tabIndex="0">
            <Link className="mark" to={`/project/${slug}`}>
              <h2>{name}</h2>
            </Link>
            <Img
              fluid={fluid}
              alt={`Project: ${project.name}. Cover photo: ${project.photo.description}`}
            />
          </SingleProjectStyles>
        )
      })}
    </>
  )
}

export default function ProjectList({ projects }) {
  return (
    <ProjectListStyles role="list">
      <SingleProject projects={projects} />
    </ProjectListStyles>
  )
}
