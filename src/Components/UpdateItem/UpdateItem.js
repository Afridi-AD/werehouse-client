import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';

const UpdateItem = () => {
    

    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('https://mighty-scrubland-10205.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    return (
        <div>
            {
                items.map(item => <ManageItem
                key={item._id}
                item ={item}
                ></ManageItem>)
            }

          <h1> item {items.length}</h1>
            
        </div>
    );
};

export default UpdateItem;