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
import RegisterAdmin from './pages/RegisterAdmin/RegisterAdmin'
import RegisterUser from './pages/RegisterUser/RegisterUser'
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
      <Route path='/register/admin' element={<RegisterAdmin/>}/>
      <Route path='/register/user' element={<RegisterUser/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
