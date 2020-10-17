import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import upload from '../../../images/icons/upload.png'
import {UserContext} from '../../../App';
import { ToastContainer, toast } from 'react-toastify';
const Review = () => {
    document.title='Creative Agency | Review'
    const [data]=useContext(UserContext)
    const [review,setReview]=useState({})
    
    useEffect(()=>{
        setReview({...review,name:data.user?.name})
    },[data])

    const addReviewFormHandler=(e)=>{
        e.preventDefault()
        fetch('https://rocky-thicket-76797.herokuapp.com/add-review',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(result=>{
            result && notify()
        })
    }
    const inputHandler=(e)=>{
        setReview({...review, [e.target.name]:e.target.value, img:data.user?.img})
    }
    const notify = () => toast("Wow! review added");
    return (
        <div> 
           <Row xs={12}>
                <Col xs={12} md={3} lg={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col xs={12} md={7} lg={8} >
                <div className='d-flex justify-content-between'>
                    <h4 className='mt-4 ml-5'>Review</h4>
                    <h2 className='mt-4 mr-5 display-username-1' style={{fontSize:'16px', fontWeight:'500'}}>{data.user?.name || 'User'}</h2>
                </div>
                    <Container className=' order-form-container mt-5' style={{background:'#f1f6ff'}}>
                    <Form onSubmit={addReviewFormHandler}>
                        <Row xs={10} sm={12} className='p-5'>
                            <Col xs={10} md={12} lg={8}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control onChange={inputHandler} name='name' type="name" placeholder="Your name" value={review.name} />
                                </Form.Group>

                                <Form.Group controlId="formBasicDesignation">
                                    <Form.Control onBlur={inputHandler} name='designationAndCompany' type="designation" placeholder="Designation, Company name - suppose: CEO, Menpol" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onBlur={inputHandler} name='description' as="textarea" rows="5" placeholder='Description'/>
                                </Form.Group>
                                <Button className='btn-dark px-3 py-1' type='submit'>Submit</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
            <ToastContainer bodyClassName='toast-color'/>
        </div>
    );
};

export default Review; 