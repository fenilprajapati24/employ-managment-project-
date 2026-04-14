import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './component/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import Show from './component/Show'

function App() {
  const [count, setCount] = useState(0)



  const router=createBrowserRouter([

    {
            path:'/',
            element: 
            <div>

              <Header></Header>
              <Home></Home>
              
            </div>
    },
    {
            path:'/show',
            element:
            <div>
              <Header></Header>
              <Show></Show>
            </div>
    }
  ])

  return (
    <>
            <RouterProvider router={router}>

            </RouterProvider>
    </>
  )
}

export default App
