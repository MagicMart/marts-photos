import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const PhotoArrayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
`

const SinglePhotoStyles = styled.div`
  display: grid;
  grid-template-rows: 100px;
  border: 1px solid green;
`

const SelectedStyles = styled.div`
  max-width: 300px;
  height: 300px;
`

export default function SingleProject({ data }) {
  const [selected, setSelected] = React.useState(data.project.photos[0])
  return (
    <>
      <SelectedStyles>
        <Img fluid={selected.image.asset.fluid} />
      </SelectedStyles>
      <PhotoArrayStyles>
        {data.project.photos.map((photo) => (
          <SinglePhotoStyles onClick={() => setSelected(photo)}>
            <Img fluid={photo.image.asset.fluid} />
          </SinglePhotoStyles>
        ))}
      </PhotoArrayStyles>
    </>
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
