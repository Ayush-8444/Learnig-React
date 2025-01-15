import { useState, useEffect } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/authentication'
import {login, logOut} from "./store/authSlice"
import { Header , Footer, Loading } from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.currentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logOut())
        }
      })
      .finally( () => setLoading(false))
    
  }, [])
  
  return !loading ? <div>
    <Header />
    <main>
      <Outlet />
     </main>
    <Footer />
  </div> : <Loading />
}

export default App
