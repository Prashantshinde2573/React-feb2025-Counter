import { useState } from 'react'
import Counter from './Counter'
import PropsExample from './Components/PropsExample'
import './App.css'



function App() {
  return(
    <>
    <Counter/>
    <PropsExample name="Prashant Shinde" info="Frontend developer"/>
    <PropsExample name="Prashant Shinde" info="Web developer"/>
    </>
  )
}


export default App
