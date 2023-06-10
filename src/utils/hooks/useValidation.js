import {useEffect, useState} from "react";

const useValidation = (value, validations ,validity) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError(true)
          } else {
            setMinLengthError(false)
          }
          break;
        case 'isEmpty':
          if (value) {
            setIsEmpty(false)
          } else {
            setIsEmpty(true)
          }
          break;
        case  'isEmail' :
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{3,})$/i;
          if (re.test(String(value).toLowerCase())) {
            setIsEmailError(false)
          } else {
            setIsEmailError(true)
          }
          break;
      }

      if (minLengthError) {
        setErrorMessage(`Длина дожна быть длинее ${validations.minLength} символов `)

      } else if (isEmpty) {
        setErrorMessage('Поле не может быть пустым')

      } else if (isEmailError) {
        setErrorMessage('Введите корректный email')
      }
    }

  }, [value])

  return {
    isEmpty,
    minLengthError,
    isEmailError,
    errorMessage,
    validity
  }
}
export default useValidation