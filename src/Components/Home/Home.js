import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import Product from "../Product/Product";
import './Home.css';



const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <div className="text-center mt-5">
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/mcHvwRj/rsz-cycle5.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Egglle</h5>
      <p>The best one to ride anywhere</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/2MWLnwT/rsz-cycle6.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Spider</h5>
      <p>Hard breaking one that protect you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/2sFymrW/rsz-cycle7.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>The long lasting one</h5>
      <p>Stainless steel would be long lasting.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            <div className="product ms-5 mt-5 border-radius">
            {
          products.slice(0,6).map(product =><Product
          key={product._id}
          product={product}
          ></Product>)  
        }
        
            </div>

        </div>
    );
};

export default Home;