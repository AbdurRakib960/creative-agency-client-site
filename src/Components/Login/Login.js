import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom'
import logo from '../../images/logos/logo.png'
import google from '../../images/icons/google.png'
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebaseConfig';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    document.title='Creative Agency | Login'
    const history=useHistory()
    const [data,setData]=useContext(UserContext)
    
  const googleSigninHandler=()=>{    
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result=>{
        setData({...data,user:{name:result.user.displayName, email:result.user.email, img:result.user.photoURL}})
        //get token and set it to session storage
        firebase.auth().currentUser.getIdToken(true)
        .then(token=>{
           sessionStorage.setItem('token',JSON.stringify(token))
            history.replace(history.location.location?.pathname || '/')
        })
        .catch(err=>{
            console.log(err)
        })
    })
  }
    
    return (
        <div>
            <div className='mt-5' style={{width:'150px', margin:'auto'}}>
                <Link to='/'><img  style={{height:'50px'}} src={logo} alt=""/></Link>
            </div>
            <div className='mt-5 login-form-container' >
                <h3 className='text-center' style={{fontSize:'24px', fontWeight:'bold'}}>
                    Login with
                </h3>
                <div style={{cursor:'pointer'}} onClick={googleSigninHandler} className=' d-flex google-flex'>
                    <img className='m-1' style={{width:'30px',height:'30px'}} src={google} alt=""/>
                    <p className='ml-5 m-1'>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;