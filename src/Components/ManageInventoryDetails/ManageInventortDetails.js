import React, { useEffect, useState } from 'react';

const ManageInventortDetails = ({item,handleProductDelete}) => {


  
  

  
    const {name,price,quantity,suplier,description,picture,} = item;
    return (
        <>
    
    
      
      <td>{name}</td>
      <td>{quantity}</td>
      <td><button onClick={()=>handleProductDelete(item._id)}>Delete</button></td>
      
    
    
  
        </>
    );
};

export default ManageInventortDetails;

