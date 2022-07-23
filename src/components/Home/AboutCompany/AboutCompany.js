import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Car from '../../../images/h1-img1.png';
import './AboutCompany.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const AboutCompany = () => {
    return (
       <section style={{height:'70vh'}}>
          <div className='container' style={{marginTop:'150px'}}>
          <div className="row">
               <div className="col-lg-6 col-md-6 col-6">
               <h1 style={{fontWeight:'normal', color:'#9095B1'}}>Professional <span style={{color:'#2E73FE'}}>care & services.</span></h1>
                   <p style={{fontWeight:'normal', color:'#9095B1'}}>CarePair is all about superb quality, skills, fluids and lubricants and parts. Hence no matter what you drive, you can leave it in our deft hands without a trace of worry. Whether you are looking for scheduled car maintenance.</p>
                   <p style={{fontWeight:'normal', color:'#9095B1'}}><FontAwesomeIcon icon={faLocationDot} />  14 Tottenham Court Road, London, England.</p>
                   <p style={{fontWeight:'normal', color:'#9095B1'}}><FontAwesomeIcon icon={faClock} />  08:00 AM - 8:00 PM Week Days</p>
                   <br/>
               </div>
               <div className="col-lg-6 col-md-6 col-6">
                 <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                 >
                     <img src={Car} alt="" className="img-fluid"/>
                 </div>
               </div>
           </div>
          </div>
       </section>
    );
};

export default AboutCompany;