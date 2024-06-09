import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([]);

 
  useEffect(() => {
    axios.get('/')
      .then(response => console.log(response.data))
       setCount(response.data)
      .catch(error => console.error(error))
  }
  , [count])

  return (
    <>
      <div className='h-screen w-screen bg-slate-400'>
        <img src={reactLogo} alt="react logo" className="h-12" />
      </div>
    </>
  )
}

export default App
