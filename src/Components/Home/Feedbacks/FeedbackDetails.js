import React, { useContext } from 'react';
import {Col, Card} from 'react-bootstrap';
import { UserContext } from '../../../App';
import './FeedbackDetails.css'
const FeedbackDetails = ({feedback}) => {
    const [data]=useContext(UserContext)
    const deleteFeedbackHandler=(event)=>{
        
        fetch('https://rocky-thicket-76797.herokuapp.com/delete-feedback',{
            method:'DELETE',
            headers:{'Content-Type':'application/json', id:feedback._id}
        })
        .then(res=>res.json())
        .then(result=>{
           console.log('deleted')
          
        })
    }
    return (
        <Col xs={12} md={6} lg={4} className='text-center' >
            <Card  onDoubleClick={deleteFeedbackHandler} className='feedback-details-card mt-5' style={{ width: '90%',margin:'auto' }}>
                <Card.Body >
                    <div className='d-flex feedback-top'>
                        <img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={feedback.img} alt=""/>
                        <div className='ml-3 mt-1'>
                            <h5 style={{fontSize:'20px',fontWeight:'600'}}>{feedback.name}</h5>
                            <p style={{fontSize:'16px',fontWeight:'600'}}>{feedback.designationAndCompany}</p>
                        </div>
                       
                    </div> 
                    <div className='feedback-description'>
                        <p className='mt-2' style={{fontSize:'16px',fontWeight:'400'}}> {feedback.description}</p>
                    </div>
                    
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeedbackDetails;