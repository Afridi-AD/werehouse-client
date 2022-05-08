import React, { useEffect, useState } from 'react';

const ManageItem = (props) => {

    const [product, setProduct] =useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/product/`
    },[])

    // const {name,price,quantity,suplier,description,picture} = props.product
    return (
        <div>
            <h1>This is order </h1>
        </div>
    );
};

export default ManageItem;