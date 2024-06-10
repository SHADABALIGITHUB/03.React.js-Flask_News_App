
import Main from './Components/Dashboard.jsx/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AboutUs from './Components/About/AboutUs';

import Layout from './Components/Layout/Layout';

function App() {
    const url=[
    'https://newsapi.org/v2/everything?q=apple&from=2024-06-08&to=2024-06-08&sortBy=popularity&apiKey=7f23ee2c1be140fe999cfa5abb6dc5f1',
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7f23ee2c1be140fe999cfa5abb6dc5f1',
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7f23ee2c1be140fe999cfa5abb6dc5f1',
    // 'https://newsapi.org/v2/everything?q=wallstreet&from=2024-06-08&to=2024-06-08&sortBy=popularity&apiKey=7f23ee2c1be140fe999cfa5abb6dc5f1',
    'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7f23ee2c1be140fe999cfa5abb6dc5f1'
 ]
 

  return (
    <>

     <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main url={url[0]}/>}/>
          <Route path='apple' element={<Main url={url[0]} />}/>
          {/* <Route path='tesla' element={<Main  url={url[1]}/>}/> */}
          <Route path='us' element={<Main url={url[1]} />}/>
          <Route path='tech' element={<Main url={url[2]} />}/>
          <Route path='wallstreet' element={<Main url={url[3]} />}/>

          <Route path='about' element={<AboutUs/>}/>
        </Route>
        <Route path='/*' element={<h1 className='text-white'>page not found 404</h1>}/>
        
      </Routes>
     </BrowserRouter>

     

     
    </>
  )
}

export default App
