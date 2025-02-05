import { Navigate, Outlet } from 'react-router-dom';

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
    </>
  )
}

export default ProtectedUtils