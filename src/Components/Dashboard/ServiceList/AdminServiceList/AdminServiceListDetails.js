import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const AdminServiceListDetails = ({service}) => {
    const notify = () => toast("Wow! status changed");
    const [pending, setPending]=useState(service.status.toLowerCase()=='pending')
    const statusHandler=(e)=>{
        setPending(!pending)
        fetch('https://rocky-thicket-76797.herokuapp.com/update-status',{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                status:e.target.value,
                id:service._id
            })
        })
        .then(res=>res.json())
        .then(result=>{
            result && notify()
        })
    }
    
    return (
        <>
        <tr style={{ fontWeight:'400',}}>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.serviceTitle}</td>
            <td>{service.projectDetails}</td>
            <td>
            {
                pending &&
                 <Form.Control as="select" className='text-danger' onChange={statusHandler}>
                    <option  selected style={{color:'#FF4545'}}>Pending</option>
                    <option style={{color:'#009444'}}>Done</option>
                </Form.Control>
            }
            {
                !pending &&
                <Form.Control className='text-success' as="select" onChange={statusHandler}>
                    <option style={{color:'#FF4545'}}>Pending</option>
                    <option selected style={{color:'#009444'}}>Done</option>
                </Form.Control>
            }
            </td>
        </tr>
        <ToastContainer bodyClassName='toast-color'/>

        </>
    );
};

export default AdminServiceListDetails;