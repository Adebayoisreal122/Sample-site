import { useState } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css';


import Wellcome from './components/Wellcome';
function App() {
  const [count, setCount] = useState(0)

  return (

    <>   
   <Routes>
  
  <Route path="/" element={<Wellcome/>} />

</Routes>

    </>
  )
}

export default App
