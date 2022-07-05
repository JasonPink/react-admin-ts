import React from 'react'

const Buttons = ({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  )
}

export default React.memo(Buttons)
