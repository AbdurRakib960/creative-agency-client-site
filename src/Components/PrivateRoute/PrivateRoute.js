import React from 'react';
import { useContext } from 'react';
import {Redirect, Route, useLocation} from 'react-router-dom'
import { UserContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [data,setData]=useContext(UserContext)
    const location=useLocation()
    return (
        <Route
            {...rest}
            render={
                ()=>data.user?(children)
                :(
                    <Redirect to={{pathname:'/login', location}}/>
                )
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;