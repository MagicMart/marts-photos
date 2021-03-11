import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'

const FormStyles = styled.form`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  label {
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
  }
`

export default function Home() {
  return (
    <>
      <SEO title="Contact" />
      <h2 className="mark" style={{ color: 'var(--red)' }}>
        Contact
      </h2>
      <FormStyles>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea value="" />
        </label>
        <input type="submit" value="Submit" />
      </FormStyles>
    </>
  )
}
