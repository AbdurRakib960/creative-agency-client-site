import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import uber from '../../../images/logos/uber.png'
import slack from '../../../images/logos/slack.png'
const Partners = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row xs={12} className='justify-content-around align-items-center '>
                    <Col className='text-center' xs={6} md={2}><img style={{width:'100px'}} src={slack} alt=""/></Col>
                    <Col className='text-center' xs={6} md={2}><img style={{width:'100px'}} src={google} alt=""/></Col>
                    <Col className='text-center' xs={6} md={2}><img style={{width:'100px'}} src={uber} alt=""/></Col>
                    <Col className='text-center' xs={6} md={2}><img style={{width:'100px'}} src={netflix} alt=""/></Col>
                    <Col className='text-center' xs={6} md={2}><img style={{width:'100px'}} src={airbnb} alt=""/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Partners;