import { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AddServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://fast-tundra-26800.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="container" style={{marginTop:'70px'}}>
           <div
           data-aos="fade-left"
           data-aos-duration="2000"
           >
           <h1 className="d-flex justify-content-center"style={{color:'#253367', fontWeight:'bold', marginBottom:'40px'}}>Find Your Service</h1>
           </div>
            <div data-aos="fade-up"
            data-aos-duration="2000">
            <div className="row">
                {
                    services.map(service=><Service service={service}></Service>)
               }
            </div>
             
            </div>
        </div>
    );
};

export default AddServices;