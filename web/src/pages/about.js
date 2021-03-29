import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import styled from 'styled-components'

const AboutStyles = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: auto 300px auto;
  justify-content: center;
  grid-column-gap: 10px;
  h2 {
    font-size: 2rem;
    grid-column: span 1;
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    h2 {
      grid-column: span 2;
    }
    p {
      margin: 0;
      padding: 0;
    }
  }
`

export default function Home({ data }) {
  return (
    <>
      <SEO title={`About ${data.about.name}`} />
      <AboutStyles>
        <h2>
          <span className="mark">{data.about.name}</span>
        </h2>
        <Img fluid={data.about.image.asset.fluid} />
        <p>{data.about.bio}</p>
      </AboutStyles>
    </>
  )
}

export const query = graphql`
  query About {
    about: sanityAbout {
      name
      bio
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
