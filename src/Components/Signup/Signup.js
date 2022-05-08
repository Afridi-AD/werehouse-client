import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app)
const Signup = () => {

  const [email, setEmail] = useState('');
  const [registerd,setRegisterd] =useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [error,setError] = useState('');

    const handlePasswordBlure= (event)=>{
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event)=>{
         setConfirmpassword(event.target.value);
    }

    const handlleEmailBlur = (event)=>{
        setEmail(event.target.value)
    }

    const handleFormsubmit = (event) => {
      createUserWithEmailAndPassword(auth,email,password)
      .then(result =>{ 
        const user = result.user;
        console.log(user);
        veriFyEmail();
      })
      .catch(error=>{
        console.error(error);
      })
      event.preventDefault();
      
    }

    const veriFyEmail = ()=>{
      sendEmailVerification(auth.currentUser)
      .then(()=>{
        console.log('email ver')
      })
    }
    return (
        <div>
            <h1 className='text-center'>Please Signup</h1>
        <Form onSubmit={handleFormsubmit} className='mx-auto w-50'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control onBlur={handlleEmailBlur} type="email" placeholder="Enter email" required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onBlur={handlePasswordBlure} type="password" placeholder="Password" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label> Confirm Password</Form.Label>
      <Form.Control  onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Signup
    </Button>
    <p style={{color :'red'}}>{error}</p>
  </Form>
  <p className='text-center'>Want to login? <Link to ="/login">login</Link></p>
     </div>
    );
};

export default Signup;