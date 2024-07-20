//useRef helps you to get access to DOM elements 

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function App() {
  const [incomeTax , setIncomeTax] = useState(2000);
  const divRef = useRef(); //useRef helps us to get reference to DOM elements
  
  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10 //this is how you get current reference of the specific div 
    },5000);
  },[])

  return ( //this ref={divRef} is the reference to the div  , that is we update the incometax state from 2000 to 10 basically 
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>  
    </div>
  )

}

export default App
