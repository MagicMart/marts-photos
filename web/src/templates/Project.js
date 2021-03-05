import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const ProjectStyles = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-row-gap: 1rem;
  justify-content: center;
  h2 {
    font-size: 1.8rem;
  }
`

const PhotoArrayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
`

const SinglePhotoStyles = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 100px;
  border: 1px solid green;
  .layer {
    position: absolute;
    background-color: rgba(248, 247, 216, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
        <h2 className="mark">{data.project.name}</h2>
        <Img fluid={selected.image.asset.fluid} alt={selected.description} />
      </SelectedStyles>
      <PhotoArrayStyles>
        {data.project.photos.map((photo) => (
          <SinglePhotoStyles key={photo.id} onClick={() => setSelected(photo)}>
            <Img fluid={photo.image.asset.fluid} alt={photo.description} />
            {photo.id !== selected.id && <div className="layer"></div>}
          </SinglePhotoStyles>
        ))}
      </PhotoArrayStyles>
    </ProjectStyles>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      photos {
        name
        id
        description
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
