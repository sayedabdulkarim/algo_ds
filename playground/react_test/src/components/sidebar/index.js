import React from 'react';
import { data } from "./data";
import Folder from './Folder';


const Index = () => {
  console.log(data, "ddd")
  return (
    <>
      <button onClick={_ => console.log(data, " dataaa")}>data</button>
      <hr />
      <hr />
      <hr />
      <Folder
        data={data}
      />
    </>
  )
}

export default Index