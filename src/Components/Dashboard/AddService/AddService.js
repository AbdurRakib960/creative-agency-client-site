import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import './AddService.css'
import upload from '../../../images/icons/upload.png'
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../../App';

const AddService = () => {
    document.title='Creative Agency | Add Service'
    const [data]=useContext(UserContext)
    const [service,setService]=useState({})
    const inputHandler=event=>{
        setService({...service, [event.target.name]:event.target.value})
    }
    const addServiceFormHandler=(e)=>{
        const formData=new FormData()
        formData.append('file',service.img)
        formData.append('description',service.description)
        formData.append('serviceTitle',service.serviceTitle)

        fetch('https://rocky-thicket-76797.herokuapp.com/add-service',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            result && notify()
        })
    }
    const notify = () => toast("Wow! Service Added");
    return (
        <div>
            <Row xs={12}>
                <Col xs={12} md={3} lg={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col xs={12} md={7} lg={8} >
                <div className='d-flex justify-content-between'>
                    <h4 className='mt-4 ml-5'>Add Service</h4>
                    <h2 className='mt-4 display-username-1' style={{fontSize:'16px', fontWeight:'500'}}>{data.user?.name || 'User'}</h2>
                </div>
                    <Container className='mt-5 add-service-form-container' style={{background:'#f1f6ff'}}>
                    <Form >
                        <Row xs={12} className='p-4'>
                            <Col md={10} lg={6}>
                                <Form.Label>Service Title</Form.Label>
                                <Form.Group controlId="formBasicText">
                                <Form.Control onBlur={inputHandler} name='serviceTitle' type="text" placeholder="Enter title" />
                                
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onBlur={inputHandler} name='description' as="textarea" rows="5" placeholder='Description'/>
                                </Form.Group>
                            </Col>
                            <Col md={8} lg={6} className='mt-3 '>
                                <div className='file-upload' 
                                    style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                    <input onChange={event=>setService({...service,img:event.target.files[0]})} type="file"/>
                                    <p style={{color:'#009444',margin:'0', marginLeft:'5px'}}>Upload image</p>
                                </div>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                    <Button onClick={addServiceFormHandler} className='float-right mt-2' style={{background:'#009444'}} type="submit">
                        Submit
                    </Button>   
                    
                </Col>
            </Row>
            <ToastContainer bodyClassName='toast-color'/>
        </div>
    );
};

export default AddService;