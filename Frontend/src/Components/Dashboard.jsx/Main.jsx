import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BackgroundImage from '../../assets/bg_news.jpg';
const Main = (props) => {
     const [data, setData] = useState([]);
     const location = useLocation();
       
        // async function fetchData() {
         useEffect(() => {
           
   
   async function fetchData() {
   
    // const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-06-08&to=2024-06-08&sortBy=popularity&apiKey=7f23ee2c1be140fe999cfa5abb6dc5f1');
    const response = await fetch(props.url);
    const data = await response.json();
    setData(data.articles);
  
   }
  fetchData();
 },[location.pathname])
      const call = (index1) => {
          data.map((item,index) => {
              if(index1 === index){
                window.open(item.url);
              }

            });
          
           
        }

    return (
         
        <div className='flex-1 container'>
            {/* <h1 className='sm:text-lg text-sm text-white font-bold text-center md:text-3xl'>Today's News</h1> */}
            <div className='text-white font-serif flex flex-wrap w-full justify-around items-center'>
                {data.map((item,index) => (
                    
                     <div key={index} className={`bg-transparent w-11/12 h-1/2 sm:w-1/3 md:w-1/4 shadow-black sm:m-4 m-4 ${item.title==='[Removed]'?'hidden':'flex'} rounded-3xl flex-col flex gap-2 items-center`}>

            
                     <img src={item.urlToImage?item.urlToImage:BackgroundImage} alt='news' className='w-96 h-36 rounded-lg'/>
                     <div className='m-4 flex flex-col gap-3'>

                     <h1 className='text-my text-sm font-bold decoration-white decoration-1 cursor-pointer hover:underline' onClick={()=>call(index)}>{item.title}</h1>
                     <hr />
                     <div> <h2 className='text-xs text-sky-400'>Author:{item.author}</h2><h3 className='text-xs text-sky-400'>{item.publishedAt}</h3> </div>

                       
                    </div>

                

                      

                     </div>
                    

                     
                     
                   
                     
                ))}
            </div>
           
        </div>
    );
};



export default Main;
