import {useState} from 'react'
import { Button } from './components/ui/ui/button'
import { Navigate,Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import SignInPage from './auth/sign-in/index.jsx';
import Header from './components/ui/custom/Header';


function App() {
  const [count,setCount]=useState(0)
   const {user,isLoaded,isSignedIn}=useUser();

   if(!isSignedIn&&isLoaded ){
    return <Navigate to={'/auth/sign-in'}/>   //if not signed in then you jump them to homepage i.e siginpage
   }

  return (
    <>
  
    <Header/>
    <Outlet/>
    </>
  )
}

export default App