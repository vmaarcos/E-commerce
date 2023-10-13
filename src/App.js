import React,{useState, useEffect} from 'react';
import './App.css';

const App=()=>{
  const [fake, setFake]=useState([]);
  console.log(fake);
  useEffect(()=>{
    fakeStore();
  }, [])
  

    const fakeStore=async()=>{
      const response=await fetch("https://fakestoreapi.com/products");
     // console.log(response);
      const jsonData=await response.json();
      // console.log(jsonData);
      setFake(jsonData);
    }

    //fakeStore();

  return(
    <>
    <h2>Fake Api</h2>
    <div className='container'>
      {fake.map((values)=>{
        return(
          <>
          <div className='box'>
        <div className='content'>
          <h5>{values.title}</h5>
          <p>{values.descrição}</p>
        </div>
        <img src={values.image} alt=''/>
      </div>
          </>
        )
      }
      )}
      <div className='box'>
        <div className='content'>
          <h5>title</h5>
          <p>descrição do bglh xará</p>
        </div>
        <h1>image</h1>
      </div>
      
       
    </div>
    </>
  )
}

export default App;
