import React from 'react'
import "./toaster.css"

const Toaster = ({
    toastList,
    handleOnDelete
}) => {
  return (
    <ul
    className='toaster'
    >
        {
            [...toastList]?.map( item => {
                const { id, text, background } = item;
                return(
                    <li
                        className='notify'
                        style={{
                             background,
                             color: "black"
                        }}
                        key={ id }
                    >
                        <button onClick={_ => handleOnDelete(id)}>X</button>
                        <p>{ text }</p>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Toaster