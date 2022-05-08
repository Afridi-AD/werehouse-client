import { getAuth } from 'firebase/auth';
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';


const auth = getAuth(app);

const RequirAuth = ({children}) => {
    const location = useLocation();
    const [user] = useAuthState(auth);
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequirAuth;