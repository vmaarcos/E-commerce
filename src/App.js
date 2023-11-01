import React,{useState, useEffect} from 'react';
import './App.css';
import IconCar from './image/carrinho-de-compras.png';




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

    <div className='ContainerHeader'>
    <img src={IconCar} className='imageIcon'></img>
    <h1 className='Logo'>E-Commerce</h1>
    </div>



    <div className='ContainerBanner'>
         
          </div>


    <div className='ContainerMap'>
      {fake.map((values)=>{
        return(

          <>

        <div className='ContainerApi'>    
        <img src={values.image} className='ImgItem'/>
        <h5 className='Text_1'>{values.title}</h5>
        <h6 className='Text_2'>{values.category}</h6>

        <div className='ContainerNumbers'>
        <h3 className='Number_1'>R${values.price}</h3>
        <h3 className='Number_2'>{values.rating.rate}</h3>
        <h3 className='Number_3'>{values.rating.count}</h3>
          </div>
        </div>
          
          </>
        )
      }
      )}       
    </div>
    </>
  )
}

export default App;
