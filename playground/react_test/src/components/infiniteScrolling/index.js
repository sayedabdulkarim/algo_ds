import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Index = () => {
    //state
    const [items, setItems] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    //click
    const handleScroll = e => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        console.log( scrollTop,  " scrollTop")
        console.log( clientHeight,  " clientHeight")
        console.log( scrollHeight,  " scrollHeight")

        if(Math.floor(scrollTop) + Math.floor(clientHeight) === Math.floor(scrollHeight)){
            console.log(" calledddddd")
            setPageNo(prev => prev + 1)
        }
    }

    ///async
    useEffect(() => {
        axios.get(`https://randomuser.me/api/?page=${pageNo}&results=50`)
            .then( res => {
                console.log(res, " resss")
                setItems([...items, ...res.data.results ])
            })
    }, [pageNo])

    return (
        <div style={{
            margin: "50px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <button onClick={_ => console.log(items, pageNo, " items")}>items</button>
            <ul style={{
                border: "2px solid green",
                width: "400px",
                height: "500px",
                overflow: "scroll"
            }}
                onScroll={ handleScroll }
            >
                {
                    [...items]?.map( item => {
                        const { registered: { date }, name: { first }, picture: { thumbnail }   } = item
                        return (
                            <li
                                style={{
                                    width: "100%",
                                    border: "2px solid red",
                                    margin: "5px"
                                }}
                                key={date}
                            >{ first } - <img src={thumbnail}/></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Index