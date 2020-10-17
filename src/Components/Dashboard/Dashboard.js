import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import ServiceList from './ServiceList/ServiceList';

const Dashboard = () => {
    const [data,setData]=useContext(UserContext)
    document.title='Creative Agency | Dashboard'
    return (
        <>
            <ServiceList></ServiceList>
        </>
    );
};

export default Dashboard;