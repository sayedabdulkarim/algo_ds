import React, { useState, useCallback, useMemo } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    const [ counter, setCounter ] = useState(0)
    const [showName, setShowName] = useState(false)
    
    const [arr, setArr ] = useState([1,2,3,5,56,7,8, 9, 0,0,0,-9,3,56,7,7,89,78])
    // const arr = [1,2,3,5,56,7,8, 9, 0,0,0,-9,3,56,7,7,89,78]
    
    //click n func
    const handleName = _ => {
        setShowName(prev => !prev)
    }
    const handleCounter = useCallback(() => {
        setCounter(Math.random)
    }, [])

    const getLargestnum = useMemo(() => {
        console.log("parentttt")
        return Math.max(...arr)    
    }, [arr])
    

    return (
        <div>
            <h1>Name - { showName ? " Ram " : "Not Ram " }</h1>
            <button onClick={handleName}>handleName</button>
            {/* <button onClick={_ => setCounter(prev => prev + 1)}>Counter</button> */}
            <hr />
            <hr />
            <strong>Larget Num : { getLargestnum }</strong>
            <hr />
            <Child1 counter={counter} setCounter={handleCounter}/>
            {/* <Child2 /> */}
        </div>
    )
}

export default Parent