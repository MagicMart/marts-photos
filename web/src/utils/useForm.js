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
