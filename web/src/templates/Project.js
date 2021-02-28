import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const PhotoArrayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 1rem;
`

const SinglePhotoStyles = styled.div`
  display: grid;
  grid-template-rows: 100px;
`

export default function SingleProject({ data }) {
  return (
    <PhotoArrayStyles>
      {data.project.photos.map((photo) => (
        <SinglePhotoStyles>
          <Img fluid={photo.image.asset.fluid} />
        </SinglePhotoStyles>
      ))}
    </PhotoArrayStyles>
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
