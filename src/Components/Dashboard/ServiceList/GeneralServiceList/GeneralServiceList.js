import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import GeneralServiceListDetails from './GeneralServiceListDetails';
import { useContext } from 'react';
import {UserContext} from '../../../../App'
import loader from '../../../../images/loader.gif'
import './GeneralServiceList.css'
const GeneralServiceList = () => {
    document.title='Creative Agency | Service List'
    const [data]=useContext(UserContext)
  const [allService,setAllService]=useState([])
  useEffect(()=>{
      fetch('https://rocky-thicket-76797.herokuapp.com/show-order-by-mail',{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              email:data.user?.email
          }
      })
      .then(res=>res.json())
      .then(result=>{
          setAllService(result)
      })
  },[])
    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
            
            <div className='d-flex justify-content-between'>
                <h4 className='mt-4 ml-5'>Service List</h4>
                <h2 className='mt-4 display-username-1' style={{fontSize:'16px', fontWeight:'500'}}>{data.user?.name || 'User'}</h2>
            </div>
        <Container style={{background:'#f1f6ff', borderRadius:'8px'}} className='mt-5 pb-5'>
            <Row xs={12} className='align-items-center' style={{marginTop:'10px'}}>
                {
                        allService.length<1 && 
                        <img src={loader} style={{width:'300px', margin:'auto'}}></img>
                    }
                {
                    allService.map(service=>{
                        return <GeneralServiceListDetails key={service._id} service={service}></GeneralServiceListDetails>
                    })
                }
            </Row>
        </Container>

    </div>
    );
};

export default GeneralServiceList;