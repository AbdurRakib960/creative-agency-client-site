import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceDetails.css'
import {UserContext} from '../../../App'
import { useHistory } from 'react-router-dom';
const ServiceDetails = ({service}) => {
    const [data,setData]=useContext(UserContext)
    const history=useHistory()
    const orderCardHandler=()=>{
        setData({...data,service:service})
        history.push('/dashboard/order')
    }
    return (
        <Col xs={12} sm={6} md={4} className='text-center'>
            <Card onClick={orderCardHandler} className='service-details-card mt-5' style={{ width: '18rem',border:'none',margin:'auto' }}>
                <Card.Body>
                    <img style={{width:'74px', marginBottom:'10px', borderRadius:'100%'}} src={`data:${service.img.contentType};base64,${service.img.img}`} alt=""/>
                    <Card.Title style={{fontSize:'20px', fontWeight:'600', color:'#111430'}}>{service.serviceTitle}</Card.Title>
                        <Card.Text style={{fontSize:'16px', fontWeight:'300'}}>
                        {service.description}
                        </Card.Text>  
                    </Card.Body>
                </Card>
        </Col>
    );
};

export default ServiceDetails;