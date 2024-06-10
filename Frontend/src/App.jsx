
import Main from './Components/Dashboard.jsx/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AboutUs from './Components/About/AboutUs';

import Layout from './Components/Layout/Layout';

function App() {
 

  return (
    <>

     <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='contact' element={<h1>Contact</h1>}/>
          <Route path='*' element={<h1>404</h1>}/>
            

        </Route>
        
      </Routes>
     </BrowserRouter>

     

     
    </>
  )
}

export default App
