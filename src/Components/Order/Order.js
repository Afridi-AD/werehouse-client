import React from 'react';
import { useForm } from "react-hook-form";

const Order = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    console.log(data);

    const url = `http://localhost:5000/products`;
    fetch(url,{
      method: 'POST', 
      headers: {
          'content-type' :'application/json'
      },
      body:JSON.stringify(data) 
    })
    .then(res=> res.json())
    .then(result=>{
        console.log(result);
    })
  } 
    return (
        <div className='w-50 mx-auto'>
            <h1>Add product</h1>
           <form className='d-flex flex-column mb-2' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2' placeholder='Img url' {...register("picture" )} />
      <input className='mb-2' placeholder='supplier' {...register("suplier" )} />
      <input className='mb-2' placeholder='Description' {...register("description" )} />
      <input className='mb-2' placeholder='Quentity' type="number" {...register("quantity", { min: 18, max: 99 })} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price", { min: 18, max: 99 })} />
      <input className='mb-2' placeholder='' type="submit" value ="Add Product"  />
    </form>
        </div>
    );
};

export default Order;