/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const ProtectedUtils = () => {
    const token = sessionStorage.getItem('token');
    if(!token){
        return(
            <Navigate to={"/login"}/>
        )
    }
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default ProtectedUtils