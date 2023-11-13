import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { SidebarFinishContext } from '../contexts/SidebarFinishContext';
import { useForm } from 'react-hook-form';

const SidebarFinish = () => {
    const {isOpenFinish, handleCloseFinish} = useContext(SidebarFinishContext);
    
    const {register, setValue} = useForm();
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade);
     });
    }

    
    return (
    <div className={`${
        isOpenFinish ? 'left-0' : '-left-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
      xl:max-w-[30vw] transition-all duration-300 z-20 
      px-4 lg:px-[25px]`}>
        <div className='flex justify-between items-center py-4
        border-b'>
            <div className='uppercase text-sm 
      font-semibold'>
                Checkout
            </div>
            <div onClick={handleCloseFinish} className='cursor-pointer w-8 h-8 flex
            justify-center items-center'>
                <IoMdClose  className='text-xl'/>
            </div>
        </div>
        <div className='overflow-y-auto overflow-x-hidden flex flex-col gap-y-2 h-[320px] lg:h-[370px]'>
        {/* Inputs */}
        <div className='flex gap-y-1 flex-col mt-5'>
            <label for="first_Name" class="block mb-2 text-sm font-medium text-gray-900" >First name</label>
            <input type='' className='bg-gray-50 border-b text-gray-900 
            text-sm rounded-lg block w-full p-2.5
            focus:ring-gray-700 focus:border-gray-500 '
            placeholder="John" required></input>
        </div>
        <div className='flex gap-y-1 flex-col py-1'>
            <label for="cep_" class="block mb-2 text-sm font-medium text-gray-900" >Cep</label>
            <input {...register('cep')} type='' className='bg-gray-50 border-b text-gray-900 
            text-sm rounded-lg block w-full p-2.5
            focus:ring-gray-700 focus:border-gray-500 '
            placeholder="001001-002" onBlur={checkCEP}></input>
        </div>
        <div className='flex flex-col mt-4'>
        <label for="Bairro_" class="block mb-4 text-sm font-medium text-gray-900" >Bairro</label>
        <input type='text' className='bg-gray-50 border-b text-gray-900 
            text-sm rounded-lg block w-full p-2.5
            focus:ring-gray-700 focus:border-gray-500 '
            placeholder="Bairro" {...register('neighborhood')}></input>
        </div>

        <div className='flex flex-col mt-4'>
        <label for="Localidade_" class="block mt-2 text-sm font-medium text-gray-900" >Localidade</label>
        <input type='text' className='bg-gray-50 border-b text-gray-900 
            text-sm rounded-lg block w-full p-2.5
            focus:ring-gray-700 focus:border-gray-500'
            placeholder="Localidade" {...register('city')} ></input>
        </div>    
    </div>

        {/* Confirm and Cancel */}
        <div className='flex justify-center border-t py-12'>
                <div className='flex flex-col w-full border-t'>
                <Link to={'/FinishBuy'} className='bg-primary flex p-6 justify-center
                    items-center text-white w-full font-medium'>Confirm</Link>

                     <div className='flex flex-col w-full'>
                        <div className='bg-gray-200 flex p-6 justify-center
                        items-center text-gray w-full font-medium cursor-pointer'>
                            Cancel
                        </div>
                     </div>
                </div>
        </div>
    </div>
  )
}

export default SidebarFinish