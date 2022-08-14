import React from 'react'

const Button = ({
    btnText,
    handleOnClick
}) => {
  return (
    <button onClick={_ => handleOnClick(btnText)}>{btnText}</button>
  )
}

export default Button