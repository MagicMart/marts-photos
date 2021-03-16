import { useState } from 'react'

export default function useContact() {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const url = 'https://5kqlyfkif7.execute-api.eu-west-2.amazonaws.com/prod'

  async function sendMessage(body) {
    setLoading(true)
    setMessage('')
    setError()

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (res.status >= 400 && res.status < 600) {
      setLoading(false) // turn off loading
      setError('There was a problem with your submission')
    } else {
      // it worked!
      setLoading(false)
      setMessage('Your message was submitted.')
    }
  }

  return { error, loading, message, sendMessage }
}
