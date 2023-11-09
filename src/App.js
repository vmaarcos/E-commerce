import React from 'react';
import './index.css'
import Header from './Comp/Header/Header'
import Banner from './Comp/Banner/Banner.component'
import Feed from './Comp/Feed/Feed'
import Ad from './Comp/Ad/Ad'

function App()  {
  let slides = [
    "https://picsum.photos/1380/800?random=1",
    "https://picsum.photos/1380/800?random=2",
    "https://picsum.photos/1380/800?random=3",
    "https://picsum.photos/1380/800?random=4",
  ];

  return (
    <div className='flex flex-col'>
    <Header />
      <div className='flex flex-col gap-2'>
        <div className='w=[60%] m-auto'>
       <Banner slides={slides} />
        </div>
    <Ad />
    <Feed />
      </div>
    </div>
    );
}

export default App;
