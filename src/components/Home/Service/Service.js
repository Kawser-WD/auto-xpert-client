import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Service = (props) => {
    const {name,imageURL,price} = props.service
    return (

            <div className="col-lg-4 col-md-4 col-6">
                <div className="card mb-3" >
                <img src={imageURL} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <Link to={`/order/${name}`}><button className='booking-btn'>Booking<FontAwesomeIcon icon={faArrowRight}  style={{height:'15px',width:'25px'}}  /></button></Link>
                </div>
                </div>
            </div>
      
    );
};

export default Service;