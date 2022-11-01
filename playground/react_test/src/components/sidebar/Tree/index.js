import React from 'react'
import { data } from "../data";
import Tree from './TreeNode';


const Index = () => {
  console.log(data, " dddddddd")
  return (
    <div>
      <Tree data={data} />        
    </div>
  )
}

export default Index