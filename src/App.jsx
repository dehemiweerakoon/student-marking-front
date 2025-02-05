/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn'
import ProtectedUtils from './utills/ProtectedUtils'
import Home from './pages/Home/Home'
import DashBoard from './pages/DashBoard/DashBoard'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>

    <Route element={<ProtectedUtils/>}>
     <Route path='/user/home' element={<Home/>}/>
     <Route path='/user/dashboard' element={<DashBoard/>}/>
    </Route>

      <Route path='/login' element={<LogIn/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
