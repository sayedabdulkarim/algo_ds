import React, { useEffect, useState } from 'react'
import Parent from './components/useMemo_useCb/Parent'
import InfiniteScroll from "./components/infiniteScrolling"
import Toaster from './components/toastify'
import Tree from './components/sidebar/Tree'
import Sidebar from './components/sidebar/index'

const App = () => {
  
  return (
    <div>
      {/* useMemo, callBack,  */}
      {/* <Parent /> */}
      
      {/*  */}
      
      {/* infinite scroll */}
      {/* <InfiniteScroll /> */}

      {/*  */}
      <Tree />

      {/* <Sidebar/>  */}

      {/* <Toaster /> */}
    </div>
  )
}

export default App