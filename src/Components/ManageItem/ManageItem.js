import React, { useEffect, useState } from 'react';

const ManageItem = (props) => {

    const [product, setProduct] =useState({});
    useEffect(()=>{
        const url = `https://mighty-scrubland-10205.herokuapp.com/product/`
    },[])

    // const {name,price,quantity,suplier,description,picture} = props.product
    return (
        <div>
            <h1>This is order </h1>
        </div>
    );
};

export default ManageItem;