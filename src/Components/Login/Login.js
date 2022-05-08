import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../Hooks/useFirebase';
import './Login.css';


const auth = getAuth(app)

const Login = (sign) => {

  const { signInWithgoogle } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error,setError] = useState('');



  const handlleEmailBlur = (event) => {

    setEmail(event.target.value);
    console.log(email);
  }

 
    
  

  const handlePasswordBlure = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  const handleFormsubmit = (event) => {
    signInWithEmailAndPassword(auth,email,password,)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })
    event.preventDefault();
    
  }

 
  
  return (
    <div>
      <h1 className='text-center'>Please Login</h1>
      <Form onSubmit={handleFormsubmit} className='mx-auto w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handlleEmailBlur} type="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlure} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        
      </Form>
      <p className='text-center'>Want to signup? <Link to="/signup">Signup</Link></p>
      <div className='mx-auto'>
      <button className='mt-3 mb-2 bg-pill border-radios ' onClick={signInWithgoogle}><img src="https://i.ibb.co/3vTYMXX/rsz-1google.png" alt="" /></button>
      </div>
    </div>

  );
};

export default Login;