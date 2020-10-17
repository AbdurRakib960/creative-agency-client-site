import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../../App';
const MakeAdmin = () => {
    document.title='Creative Agency | Make Admin'
    const [data]=useContext(UserContext)
    const [admin, setAdmin]=useState('')
    const addAdminHandler=(e)=>{
        e.preventDefault()
        fetch('https://rocky-thicket-76797.herokuapp.com/add-admin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({admin})
        })
        .then(res=>res.json())
        .then(result=>{
            result && notify()
        })
    }
    const notify = () => toast("Wow! added a new admin");
    return (
        <div>
            <Row xs={12}>
                <Col xs={12} md={3} lg={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col xs={12} md={8} lg={8}>
                <div className='d-flex justify-content-between'>
                    <h4 className='mt-4 ml-5'>Make Admin</h4>
                    <h2 className='mt-4 pr-5 display-username-1' style={{fontSize:'16px', fontWeight:'500'}}>{data.user?.name || 'User'}</h2>
                </div>
                    <Container className=' add-service-form-container mt-5' style={{background:'#f1f6ff'}}>
                    <Form onSubmit={addAdminHandler}>
                        <Row xs={12} className='p-4 align-items-center'>
                            <Col md={9} lg={7} >
                                <Form.Label>Email</Form.Label>
                                <Form.Group controlId="formBasicText">
                                <Form.Control onBlur={e=>setAdmin(e.target.value)} type="text" placeholder="abc@gmail.com" />
                                
                                </Form.Group>
                            </Col>
                           <Col md={2} >
                           <Button  className='float-left float-left btn-sm' style={{background:'#009444',marginTop:'15px'}} type="submit">
                                    Submit
                            </Button>
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

export default MakeAdmin;