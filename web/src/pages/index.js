import React from 'react'
import Img from 'gatsby-image'

export default function Home({ data }) {
  const nodes = data.project.nodes
  // const image = nodes[0].photo.image.asset.fluid

  return (
    <>
      <h1>Home page</h1>
      <pre>{JSON.stringify(nodes, null, 4)}</pre>

      {nodes.map((node) => {
        const fluid = node.photo.image.asset.fluid
        return (
          <>
            <Img fluid={fluid} />
            <h2>{node.name}</h2>
          </>
        )
      })}
    </>
  )
}

export const query = graphql`
  {
    project: allSanityProject {
      nodes {
        name
        photo {
          name
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
