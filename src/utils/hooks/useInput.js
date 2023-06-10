import {useState} from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)
  const [validity, setValidity] =useState(true)
  //ниже строка для вызова хука, но я и так в хуке ВОПРОСЫ!!!
  const valid =
    useValidation(value, validations, validity)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onBlur = (e) => {
    setIsDirty(true)
    setValidity(e.target.validity.valid)

  }

  return {
    value,
    onChange,
    onBlur,
    ...valid,
    isDirty,
    errorMessage: valid.errorMessage
  }
}

export default useInput