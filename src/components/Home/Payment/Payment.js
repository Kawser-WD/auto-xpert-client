import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import Navbar from '../Navbar/Navbar.js'


const stripePromise = loadStripe('pk_test_51KAd2vEtfrb3oJZ2glcXweIzuVz2A6OBbn4db32yo4AGOTwIOsI5ST3yNbFWEetUrTxX5IvF9dqjQCmY5TymFN1S00n5FQP6nV');

const Payment = () => {
    const { orderId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://fast-tundra-26800.herokuapp.com/order/${orderId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [orderId]);
    return (
        <div style={{marginTop:'100px'}}>
            <Navbar/>
            <h2 className='d-flex justify-content-center' style={{fontWeight:'500', color:'#30336b', marginTop:'30px'}}>Please pay for confirm your booking</h2>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;
