import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row,Container, Button } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import upload from '../../../images/icons/upload.png'
import './Order.css'
import {UserContext} from '../../../App'
import { useHistory } from 'react-router-dom';
const Order = () => {
    document.title='Creative Agency | Order'
    const history=useHistory()
    const [data]=useContext(UserContext)
    const [order,setOrder]=useState({status:'pending'})
    useEffect(()=>{
        setOrder({
            ...order,email:data.user?.email, 
            projectImage:data.service?.img,
            serviceTitle:data.service?.serviceTitle,
            projectDetails:data.service?.description,
            name:data.user?.name
        })
    },[data])
    console.log(data)
    const addOrderForm=(e)=>{
        e.preventDefault()
        fetch('https://rocky-thicket-76797.herokuapp.com/add-order',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(result=>{
           result && history.replace('/dashboard/service-list')
        })
    }
    const inputHandler=(e)=>{
        setOrder({...order,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Row xs={12}>
                <Col xs={12} md={3} lg={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col xs={12} md={7} lg={8}>
                <div className='d-flex justify-content-between'>
                    <h4 className='mt-4 ml-5'>Order</h4>
                    <h2 className='mt-4 display-username-1' style={{fontSize:'16px', fontWeight:'500'}}>{data.user?.name || 'User'}</h2>
                </div>
                    <Container className='order-form-container mt-5' style={{background:'#f1f6ff'}}>
                    <Form onSubmit={addOrderForm}>
                        <Row xs={12}  className='p-5'>
                            <Col  xs={12} md={12} lg={8}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onBlur={inputHandler} name='name' type="name" placeholder="Your name / Company's name" value={order.name}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onBlur={inputHandler} name='email' type="email" placeholder="Your email address" value={order.email}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicTitle">
                                    <Form.Control onBlur={inputHandler} name='serviceTitle' type="title" placeholder="Service title" value={order.serviceTitle}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onBlur={inputHandler} name='projectDetails' as="textarea" rows="5" placeholder='Project details' value={order.projectDetails}/>
                                </Form.Group>

                                <div className='d-flex justify-content-between'>
                                    <Form.Group className='mt-2' controlId="formBasicTitle">
                                        <Form.Control onBlur={inputHandler} name='price' type="title" placeholder="Price" />
                                    </Form.Group>
                                    <div className='file-upload ' 
                                        style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                        <input type="file"/>
                                        <p style={{color:'#009444',margin:'0', marginLeft:'5px'}}>Upload image</p>
                                    </div>
                                </div>
                                <Button type='submit' className='btn-dark px-4'>Send</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Order;