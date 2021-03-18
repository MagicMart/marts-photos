import { useState } from 'react'

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults)

  function updateValue(obj) {
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      ...obj,
    })
  }

  return { values, updateValue }
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
