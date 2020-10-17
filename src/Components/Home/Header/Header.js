import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import headerImg from '../../../images/logos/header-img.png'
import headerBg from '../../../images/header-bg.png'
import './Header.css'
import Navbar from '../../Navbar/Navbar';

const Header = () => {
    
    return (
        <div className='header-container' style={{background:`url(${headerBg}) no-repeat`, height:'700px',backgroundSize:'cover' }} >
            <Navbar></Navbar>
            <Container className='header-main-container' >
                <Row xs={12} className='align-items-center justify-content-center'>
                    <Col md={5} style={{margin:'auto'}}>
                       
                        <h1 style={{fontWeight:'700', color:'#111430'}} className='header-font '>
                            Let's Grow Your Brand To The Next Level
                        </h1>
                        <div className='hire-me'>
                            <Button className='btn-dark btn-sm '>Hire me</Button>
                        </div>
                    </Col>
                    <Col xs={11} md={6} style={{margin:'auto'}}>
                        <img className='header-img' style={{width:'90%', margin:'auto'}} src={headerImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;