import React, { useEffect, useState } from 'react';

const ManageItem = (props) => {

    const [product, setProduct] =useState({});
    useEffect(()=>{
        const url = `https://mighty-scrubland-10205.herokuapp.com/product/`
    },[])

    // const {name,price,quantity,suplier,description,picture} = props.product
    return (
        <div className='col-lg-12 col-md-4'>
            <h1>This is manage item </h1>
        </div>
    );
};

export default ManageItem;