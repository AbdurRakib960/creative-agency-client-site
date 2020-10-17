import React, { useEffect, useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import FeedbackDetails from './FeedbackDetails';
import loader from '../../../images/loader.gif'
const Feedbacks = () => {
    const [allFeedbacks,setAllFeedbacks]=useState([])
    useEffect(()=>{
        fetch('https://rocky-thicket-76797.herokuapp.com/show-feedbacks')
        .then(res=>res.json())
        .then(result=>{
            setAllFeedbacks(result.slice(-6))
        })
    },[])

    return (
        <div style={{margin:'100px 0'}}>
            <Container>
                <h4 style={{color:'#2d2d2d',fontSize:'34px', fontWeight:'600'}} className='font-weight-bold text-center'>
                    Clients <span className='brand-text'>Feedback</span>
                </h4>

            <Row xs={12} className='align-items-center' style={{marginTop:'60px'}}>
                    {
                        allFeedbacks.length<1 && 
                        <img src={loader} style={{width:'300px', margin:'auto'}}></img>
                    }
                {
                    allFeedbacks.map((feedback,index)=>{
                        return <FeedbackDetails key={feedback._id}  feedback={feedback}></FeedbackDetails>
                    })
                }
            </Row>
            </Container>
        </div>
    );
};

export default Feedbacks;