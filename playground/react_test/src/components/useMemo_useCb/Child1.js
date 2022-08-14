import React, { memo } from 'react'

const Child1 = ({
    // isShowName,
    counter,
    setCounter
}) => {
    console.log(" Child1Child1Child1Child1")
  return (
    <div>
      <h1>Child 1 components</h1>
      <p>{ counter }</p>
      <button onClick={setCounter}>Child 1 Counter</button>
    </div>
  )
}

// export default Child1
export default memo(Child1)