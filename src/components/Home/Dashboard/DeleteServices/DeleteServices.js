import { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const DeleteServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://fast-tundra-26800.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                    services.map(service=> <ManageService service={service}></ManageService>)
            }
            </div>
        </div>
    );
};

export default DeleteServices;