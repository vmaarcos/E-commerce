import React from 'react'
import { createContext,useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import { BsFillBagPlusFill } from 'react-icons/bs'
import { LiaEyeSolid } from 'react-icons/lia'

const Api=()=>{
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
      {fake.map((values)=>{
        return(
            <div>
              <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group trasition rounded-xl'>
                <div className='w-full h-full flex justify-center items-center'>
                  <div className='w-[200px] mx-auto flex justify-center items-center'>
                  <img src={values.image} className='max-h-[160px] group-hover:scale-110 transition duration-300'/>
                  </div>
                  {/* buttons */}
                  <div className='absolute top-6 -right-11
                  group-hover:right-5 bg-red-500 p-2 flex flex-col items-center justify-center
                  gap-y-2 opacity-0 
                  group-hover:opacity-100 transition-all duration-300'>
                    <button>
                        <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                          <BsFillBagPlusFill className='text-3xl'/>
                        </div>
                    </button>
                    <Link to={`/product/:${values.id}`} className='w-12 h-12 bg-white flex justify-center items-center text-center
                    text-primary drop-shadow-xl'>
                    <LiaEyeSolid />
                    </Link>
                  </div>
                </div>
              </div>
        
      <div className=''>
        <h6 className='text-sm capitalize text-gray-500 mb-1'>{values.category}</h6>
        <h5 className='font-semibold mb-1'>{values.title}</h5>
        <h3 className='font-semibold mb-1'>${values.price}</h3>
        <h3 className=''>{values.rating.rate}</h3>
        <h3 className=''>{values.rating.count}</h3>
      </div>
        </div>
        )
      }
      )}       
    </>
  )
}

export default Api;