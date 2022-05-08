import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app)
const Signup = () => {
  
  const [email, setEmail] = useState('');
  const [registerd, setRegisterd] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);
  

  const handlePasswordBlure = (event) => {
    setPassword(event.target.value);
  }

  const handleRgisterdChange=(event) =>{
    setRegisterd(event.target.checked)
  }

  // const handleConfirmPassword = (event)=>{
  //      setConfirmpassword(event.target.value);
  // }

  const handlleEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handleFormsubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      return;
    }

    if(!/(?=.*[!@#$%^&*])/.test(password)){
      setError('Password Should content single special carecter');
     return;
    }

    setValidated(true);
    setError('');
    if(registerd){
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user =result.user;
      console.log(user);
    })
    .catch(error =>{
      console.error(error);
      setError(error.message);
    })
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        setEmail('');
        setPassword('');
        veriFyEmail();
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
    }
    
    event.preventDefault();

  }

  const passWordReset =()=>{
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      console.log('email sent');
    })
  }

  const veriFyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('email ver')
      })
  }
  return (
    <div>
      <h1 className='text-center'> {registerd ?'Please Login' :'Please Signup'}</h1>
      <Form noValidate validated={validated} onSubmit={handleFormsubmit} className='mx-auto w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handlleEmailBlur} type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
          Please provide a valid Email.
        </Form.Control.Feedback>
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlure} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
         </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label> Confirm Password</Form.Label>
      <Form.Control  onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
    </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={handleRgisterdChange} type="checkbox" label={registerd? "All ready registered" :"Register"} />
        </Form.Group>
        <p className='text-danger'>{error}</p>
        <Button onClick={passWordReset} variant='link' type='submit'>Reset password?</Button>
        <Button variant="primary" type="submit">{registerd ? "Login" : "Signup"}
          
        </Button>
        
      </Form>
      <p className='text-center'>Want to login? <Link to="/login">login</Link></p>
    </div>
  );
};

export default Signup;