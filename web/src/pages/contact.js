import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import useForm from '../utils/useForm'

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
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
  })

  function handleSubmit(event) {
    alert(JSON.stringify(values, null, 4))
    event.preventDefault()
  }
  return (
    <>
      <SEO title="Contact" />
      <h2 style={{ color: 'var(--red)' }}>Contact</h2>
      <FormStyles onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={values.message}
            onChange={updateValue}
          />
        </label>
        <input type="submit" value="Submit" />
      </FormStyles>
    </>
  )
}
