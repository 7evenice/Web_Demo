import { useState } from 'react'
import '../App.css'
import '../index.css'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    // {
    //   path: '/',
    //   element: <Home />
    // },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <div className='w-full h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
