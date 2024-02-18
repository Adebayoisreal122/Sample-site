import { useState } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css';
import Wellcome from './components/Wellcome';
import AllPage from './components/AllPage';




function App() {
  const [count, setCount] = useState(0)

  return (

    <>   
   <Routes>
  
  <Route path="/" element={<AllPage/>} >
  <Route path="/" element={<Wellcome/>} />
  
  </Route>


</Routes>

    </>
  )
}

export default App
