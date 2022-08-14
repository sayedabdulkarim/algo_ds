import React, { useEffect, useState } from 'react'
import Button from './button'
import Toaster from './toaster';

const Index = () => {
    //state
    const [toastList, setToastList] = useState([]);

    // click
    const handleOnClick = (btnType) => {
        let toastObj = null;
        switch (btnType) {
            case "SUCCESS":
                toastObj = {
                    id: Math.random(),
                    text: "This is a Success Toast Component .",
                    background: "green"
                }
                setToastList([...toastList, toastObj])
                break;
            case "DANGER":
                toastObj = {
                    id: Math.random(),
                    text: "This is a Danger Toast Component .",
                    background: "red"
                }
                setToastList([...toastList, toastObj])
                break;
            case "INFO":
                toastObj = {
                    id: Math.random(),
                    text: "This is a INFO Toast Component .",
                    background: "yellow"
                }
                setToastList([...toastList, toastObj])
                break;
            case "WARNING":
                toastObj = {
                    id: Math.random(),
                    text: "This is a Warning Toast Component .",
                    background: "orange"
                }
                setToastList([...toastList, toastObj])
                break;
            default:
                setToastList([]);
        }
    }

    const handleOnDelete = (id) => {
        const filterToastList = [...toastList]?.filter( item => item.id !== id )
        setToastList(filterToastList)
    }

    useEffect(() => {
       const interval = setInterval(() => {
            if(toastList?.length){
                const filterToastList = [...toastList]?.filter( item => item.id !== toastList[0].id )
                setToastList(filterToastList)
            }
        }, 3000);

        return () => clearInterval(interval)
    }, [ toastList ])

    return (
        <div>
            <button onClick={_ => console.log(toastList, " toastList")}>toastList</button>
            <Button btnText={"SUCCESS"} handleOnClick={handleOnClick} />
            <Button btnText={"DANGER"} handleOnClick={handleOnClick}/>
            <Button btnText={"INFO"} handleOnClick={handleOnClick}/>
            <Button btnText={"WARNING"} handleOnClick={handleOnClick}/>
            {/*  */}
            <Toaster toastList={toastList} handleOnDelete={handleOnDelete}/>
        </div>
    )
}

export default Index