import { useState } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='wrapper'>
    <Header/>
    <Body/>
    <Footer/>
   </div>
   </>
  )
}

export default App
