import React from 'react'
import { useDispatch } from "react-redux"
import authService from '../../appwrite/authentication'
import { logOut } from '../../store/authSlice'

function Logout() {
    const dispatch = useDispatch()

    const clickHandler = () => {
        authService.logOut().then(() => {
            dispatch(logOut())
        })
    }

  return (
    <button
      onClick={clickHandler}
      className="inline-block px-6 py-2 duration-200 hover:bg-[#97774e] rounded-full"
    >
      Log out
    </button>
  );
}

export default Logout