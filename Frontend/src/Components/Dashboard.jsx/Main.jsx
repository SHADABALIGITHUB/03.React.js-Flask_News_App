import React, { useState } from 'react';


const Main = () => {
     const [data, setData] = useState([]);
        async function fetchData() {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7f23ee2c1be140fe999cfa5abb6dc5f1');
        const data = await response.json();
        // console.log(data);
        setData(data.articles);
        }
        function hideData() {
        setData([]);
        }
    return (
         
        <div className='bg-light flex-1 container'>
            <h1 className='text-3xl text-white font-bold text-center'>Today's News</h1>
            <div className='text-white font-serif flex flex-wrap w-full justify-around'>
                {data.map((item,index) => (
                    
                     <div key={index} className={`bg-slate-100 w-[calc(30%-20px)] shadow-lg shadow-black mt-4 p-5 rounded-3xl flex-col flex gap-2 items-center`}>

            
                     <img src={item.urlToImage?item.urlToImage:''} alt='news' className='w-96 h-48 rounded-lg'/>
                     <div className='m-4'>
                     <h1 className='text-black font-bold uppercase'>{item.title}</h1>
                     <hr />
                     <h2 className='text-sm text-sky-400'>Author:{item.author}</h2><h3 className='text-sm text-sky-400'>{item.publishedAt}</h3>
                        <hr />
                        <p className='text-black'>{item.description}</p>
                        <button className='bg-blue-700 font-lg p-2 text-white font-bold rounded-xl '>Visit </button>
                       

                     </div>

                      

                     </div>
                    

                     
                     
                   
                     
                ))}
            </div>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={hideData}>Hide Data</button>
        </div>
    );
};



export default Main;
