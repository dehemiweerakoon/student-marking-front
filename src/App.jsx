/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn'
import ProtectedUtils from './utills/ProtectedUtils'
import Home from './pages/Home/Home'
import DashBoard from './pages/DashBoard/DashBoard'
import Admin from './pages/admin/Admin'
import AddStudent from './pages/AddStudent/AddStudent'
import MarksAdd from './components/AddMarks/MarksAdd'
import Course from './components/Course/Course'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>

    <Route element={<ProtectedUtils/>}>
     <Route path='/user/home' element={<Home/>}/>
     <Route path='/user/dashboard' element={<DashBoard/>}/>
     <Route path='/admin/home' element={<Admin/>}/>
     <Route path='/admin/addStudent' element={<AddStudent/>}/>
     <Route path='/admin/addMarks' element={<MarksAdd/>}/>
     <Route path='/admin/course' element={<Course/>}/>
    </Route>

      <Route path='/login' element={<LogIn/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
