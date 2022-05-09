import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-25 d-flex justify-content-center align-items-center' >
           <Spinner animation="border" variant="success" /> 
        </div>
    );
};

export default Loading;