import React,{useState} from 'react'
import { Logo, Input, Button } from "./index"
import { Link, useNavigate} from 'react-router-dom'
import {useForm } from "react-hook-form"
import authService from '../appwrite/authentication'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()

    const login = async (data) => {
        setError('')

        try {
            const session = await authService.logIn(data)

            if (session) {
                const userData = await authService.currentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
      <div className='flex justify-center items-center w-full'>
          <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl
                p-10 border border-black/10'>
              <div className='mb-2 flex justify-center '>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' /> 
                </span>
              </div>
              <h2 className='text-center text-2xl font-bold'
              >Log in to your Account</h2>
              <p className='mt-2 text-center text-base text-black/60'>
                  Don&apos;t have an Account?
                  <Link className='font-medium text-primary transition-all duration-200 hover:underline'
                      to="/signup"
                  > SignUp</Link>
              </p>
              {error && <p className='mt-8 text-red-600 text-center'>{error}</p>}
              <form onSubmit={handleSubmit(login)} className="mt-9" >
                  <div className='space-y-5'>
                      <Input {...register("email", {
                          required: true,
                          validate: {
                              matchPatern: (value) =>
                                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                  "Email address must be valid address"
                          }
                        })}
                        label='Email' type='email' placeholder="Enter your email" />
                      <Input {...register("password", {
                          required: true,
                        })} 
                          label="Password :" type="password" placeholder="Enter your password" />
                      <Button children="SignIn" type='submit' className='w-full' />
                  </div>
              </form>
          </div>
    </div>
  )
}

export default Login