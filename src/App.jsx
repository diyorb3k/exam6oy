import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import MangeProducts from './pages/Admin/Mange-Products/Mange-Products'
import MangeCategory from './pages/Admin/Mange-Category/MangeCategory'
import NotFaund from './pages/NotFaund/NotFaund'

function App() {
  return (
    <>
    <Routes>
  <Route path='/*' element={<Admin/>}>
  <Route path='admin' element={<MangeProducts/>}>
  
  </Route>
  <Route path='mangecategory' element={<MangeCategory/>}/>
</Route>
<Route path='*' element={<NotFaund/>}/>
    </Routes>
   
    </>
  )
}

export default App
