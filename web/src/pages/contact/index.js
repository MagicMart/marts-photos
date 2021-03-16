import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../../components/seo'
import styled from 'styled-components'
import useForm from '../../utils/useForm'
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
  const { message, error, loading, sendMessage } = useContact()
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

  React.useEffect(() => {
    if (message && !error) {
      navigate('/contact/success')
    }
  })

  React.useEffect(() => {
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
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
            onChange={updateValue}
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
            onChange={updateValue}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={values.message}
            required
            onChange={updateValue}
          />
        </label>
        <input
          disabled={loading || !validEmail || !values.name || !values.message}
          type="submit"
          value="Submit"
        />
      </FormStyles>
    </>
  )
}
