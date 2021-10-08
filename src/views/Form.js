import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import './Form.scss'

const FORM_TITLE = 'Formulario personas'

const Form = ({ onChange }) => {
  const [inputNameText, setInputNameText] = useState('')
  const [inputLastNameText, setInputLastNameText] = useState('')
  const [isShowMessage, setIsShowMessage] = useState(false)
  const [isDisabledButton, setIsDisabledButton] = useState(true)

  useEffect(() => {
    inputNameText.length > 0 && inputLastNameText.length > 0
      ? setIsDisabledButton(false)
      : setIsDisabledButton(true)
  }, [inputNameText, inputLastNameText])

  const inputNameHandler = (event) => {
    setInputNameText(event)
  }

  const inputLastNameHandler = (event) => {
    setInputLastNameText(event)
  }

  const onClickHandler = () => {
    setIsShowMessage(true)
    onChange()
  }

  return (
    <>
      <div className='title-form'>{FORM_TITLE}</div>
      <Input
        label={'Nombre'}
        placeholder={'Ingrese Nombre'}
        onChange={inputNameHandler}
      />
      <Input
        label={'Apellido'}
        placeholder={'Ingrese Apellido'}
        onChange={inputLastNameHandler}
      />
      <div className='button-form'>
        <Button
          isDisabled={isDisabledButton}
          text={'Aceptar'}
          onClick={onClickHandler}
        />
      </div>
      {isShowMessage && (
        <div className='info-message'>
          Estimado {inputNameText} {inputLastNameText} su archivo se subio con
          exito
        </div>
      )}
    </>
  )
}

export default Form
