import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  }


  return (
    <div className='w-full h-screen'>
      <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/281cb1aa-8ba5-4250-b9ce-d7ddfc5b1083/BR-pt-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold '>Entrar</h1>
              {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input 
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded' 
                  type='email' 
                  placeholder='Email' 
                  autoComplete='email'
                />
                <input 
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded' 
                  type="password" 
                  placeholder='Senha' 
                  autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold uppercase '>Entrar</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type='checkbox'/>Lembre-se de mim</p>
                  <p>Precisa de ajuda?</p>
                </div>
                <p className='py-4'><span className='text-gray-600'>Novo por aqui?</span>{''}<Link to='/signup'> Assine agora.</Link></p>
              </form>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Login