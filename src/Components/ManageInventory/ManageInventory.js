import React, { useEffect, useState } from 'react';
import useMangeInventory from '../Hooks/ManageHook/useManageInventory';
import ManageInventortDetails from '../ManageInventoryDetails/ManageInventortDetails';

const ManageInventory = () => {

    const [items, setItems] = useMangeInventory();

    

    const handleProductDelete =(id)=>{
      const proced =window.confirm('Are you want to delete ?');
      if(proced){
        
        const url = `https://mighty-scrubland-10205.herokuapp.com/products/${id}`;
        fetch(url,{
          method :'DELETE'
        })
        .then(res =>res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainig = items.filter((item) => item._id !== id);
            setItems(remainig);
            console.log(remainig)
            
          }
          
        })
      }
    }

    return (
        <div className='mt-5 col-lg-12 col-md-4'>
            
            
            <table className="table table-dark">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    
    {
            items.map(item=>(<tr key={item._id}><ManageInventortDetails 
            
                item={item}
                handleProductDelete ={handleProductDelete}

                ></ManageInventortDetails></tr>))
            }
      
    
    
  </tbody>
</table>

            
        </div>
    );
};

export default ManageInventory;