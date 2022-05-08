import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {name,price,quantity,suplier,description,picture} = props.product

    const navigate = useNavigate()
    const showProduct =()=>{
    const path =`/manage/`;
    navigate(path);
    }
    return (
        <div>
            
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
    <Card.Title>Name : {name} </Card.Title>
    
    <Card.Text>
     {description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Quantity :{quantity}</ListGroupItem>
    <ListGroupItem>Supplier : {suplier}</ListGroupItem>
    
    <ListGroupItem>Price : {price} </ListGroupItem>
  </ListGroup>
  <Card.Body>
      <button className='pt-10 pill' onClick={()=>navigate('/manage')}>Update</button>
    
    
  </Card.Body>
</Card>
            
        </div>
    );
};

export default Product;