import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const ProjectStyles = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-row-gap: 1rem;
  justify-content: center;
`

const PhotoArrayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
`

const SinglePhotoStyles = styled.div`
  display: grid;
  grid-template-rows: 100px;
  border: 1px solid green;
  .layer {
    filter: opacity(0.5);
  }
`

const SelectedStyles = styled.div`
  width: 300px;
  @media (min-width: 600px) {
    width: 400px;
  }
`

export default function SingleProject({ data }) {
  const [selected, setSelected] = React.useState(data.project.photos[0])
  return (
    <ProjectStyles>
      <SelectedStyles>
        <Img fluid={selected.image.asset.fluid} />
      </SelectedStyles>
      <PhotoArrayStyles>
        {data.project.photos.map((photo) => (
          <SinglePhotoStyles key={photo.id} onClick={() => setSelected(photo)}>
            <Img
              className={photo.id !== selected.id && 'layer'}
              fluid={photo.image.asset.fluid}
            />
          </SinglePhotoStyles>
        ))}
      </PhotoArrayStyles>
    </ProjectStyles>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      photos {
        name
        id
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
