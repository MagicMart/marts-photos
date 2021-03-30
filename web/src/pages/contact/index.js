import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../../components/seo'
import styled from 'styled-components'
import useForm, { validateEmail } from '../../utils/useForm'
import useContact from '../../utils/useContact'

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
  const { message, error, loading, sendMessage, clearError } = useContact()
  const [validEmail, setValidEmail] = React.useState(false)
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage(values)
  }

  function handleValue(e) {
    updateValue({ [e.target.name]: e.target.value })
  }

  function clear() {
    updateValue({
      name: '',
      email: '',
      message: '',
    })
    clearError()
  }

  React.useEffect(() => {
    if (message && !error) {
      navigate('/contact/success')
    }
  }, [message, error])

  React.useEffect(() => {
    if (validateEmail(values.email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }, [values.email])

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
            onChange={handleValue}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            required
            onChange={handleValue}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={values.message}
            required
            onChange={handleValue}
          />
        </label>
        {error ? (
          <p>
            There was a problem with your submission!{' '}
            <button onClick={clear}>&times;</button>
          </p>
        ) : (
          <input
            disabled={loading || !validEmail || !values.name || !values.message}
            type="submit"
            value="Submit"
          />
        )}
      </FormStyles>
    </>
  )
}
