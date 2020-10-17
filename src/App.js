import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Order from './Components/Dashboard/Order/Order';
import Review from './Components/Dashboard/Review/Review';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useEffect } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import NotFound from './Components/NotFound/NotFound';
export const UserContext=createContext()
function App() {
  const [data,setData]=useState({})
  

    useEffect(()=>{
      //get token and fetch user info
    const sessionData=sessionStorage.getItem('token')
    const token=JSON.parse(sessionData)
    token && fetch('https://rocky-thicket-76797.herokuapp.com',{
      method:'GET',
      headers:{ 
        'Content-Type':'application/json',
        token:token
      }
    })
    .then(res=>res.json())
    .then(result=>{
      setData({...data,user:{name:result.name, email:result.email, img:result.picture}})
    })
    },[])
    
  return (
    <UserContext.Provider value={[data,setData]}>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <PrivateRoute exact path='/dashboard/service-list'>
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute exact path='/dashboard/order'>
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute exact path='/dashboard/review'>
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute exact path='/dashboard/add-service'>
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute exact path='/dashboard/make-admin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
