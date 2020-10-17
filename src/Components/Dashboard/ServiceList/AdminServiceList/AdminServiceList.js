import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import AdminServiceListDetails from './AdminServiceListDetails';
import { Table } from 'react-bootstrap';
import './AdminServiceList.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const AdminServiceList = () => {
    document.title='Creative Agency |Admin - Service List'
    const [data]=useContext(UserContext)
    const [allService,setAllService]=useState([])
    useEffect(()=>{
        fetch('https://rocky-thicket-76797.herokuapp.com/show-orders')
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
            <Container className='mt-5 admin-service-list-container' style={{background:'#f1f6ff'}}>
                            
                    <Table responsive="xs" className='admin-service-list-table' style={{background:'#f1f6ff'}} >
                        <thead className='admin-service-list-table-head'>
                            <tr>
                                <th style={{width:'20%'}}>Name</th>
                                <th style={{width:'20%'}}>Email ID</th>
                                <th style={{width:'20%'}}>Service</th>
                                <th style={{width:'20%'}}>Project Details</th>
                                <th style={{width:'20%'}}>Status</th>
                            </tr>
                            
                        </thead>
                            
                        <tbody>
                           
                            {
                                allService.map(service=>{
                                    return <AdminServiceListDetails key={service._id} service={service}></AdminServiceListDetails>
                                })
                            }
                        </tbody>
                    </Table>
                        {
                                allService.length<1 &&
                                <LinearProgress color='secondary' style={{width:'100%'}}/>
                            }
            </Container>
        </div>
    );
};

export default AdminServiceList;