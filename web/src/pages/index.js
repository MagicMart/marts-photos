import React from 'react'
import { graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'

export default function Home({ data }) {
  const nodes = data.project.nodes
  // const image = nodes[0].photo.image.asset.fluid

  return (
    <>
      <ProjectList projects={nodes} />
    </>
  )
}

export const query = graphql`
  query ProjectQuery {
    project: allSanityProject {
      nodes {
        id
        name
        slug {
          current
        }
        photo {
          name
          description
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
