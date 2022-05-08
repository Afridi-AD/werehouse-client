import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Header = () => {
  const {user,handleSignOut} = useFirebase();
    return (
        <div>
       <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/order'>Orders</Nav.Link>
     
      <Nav.Link as={Link} to ='/login'>Login</Nav.Link>
      <Nav.Link as={Link} to ='/manage'>ManageItem</Nav.Link>
      {    
         user?.uid ?
         <button onClick={handleSignOut}>Signout</button>
         :
        <Nav.Link as={Link} to ='/about'>About Me</Nav.Link>
      }
      <Nav.Link as={Link} to ='/blog'>Blog</Nav.Link>
      <Nav.Link as={Link} to ='/manageInventori'>ManageInventory</Nav.Link>
      
      
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;