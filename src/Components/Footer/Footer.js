import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getUTCFullYear();
    return (
        <div className='text-center'>
        <footer>
            <p> <small> copyright @{year} </small></p>
        </footer>
    </div>
    );
};

export default Footer;