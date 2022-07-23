import React from 'react';

const ServiceCatelog = () => {
    return (
        <div className='container' style={{marginBottom:'100px'}}>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-6'>
                    <h1 style={{color:'#5B618A', fontWeight:'normal'}}>Service pricing and catalogue.</h1>
                    <p style={{marginTop:'30px', color:'#B8BBC4'}}>We offer a wide range of repair services to vehicle owners located in your area. Our team knows how to handle it.</p>
                </div>
                <div className='col-lg-4 col-md-4 col-6'>
                    <h5  style={{color:'#5B618A'}}>Oil Changes </h5>
                    <div style={{color:'#9296A4', marginTop:'20px'}}>
                    <p>Full Oil Change  <span style={{color:'#2D72FE'}}>$25</span></p>
                    <p>European Car Change  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    <p>Extra Heavy Duty Diesel  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    <p>Oil & Filter  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    <p>Royal Purple Oil  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <h5  style={{color:'#5B618A'}}>Oil Preventative Maintenance</h5>
                    <div  style={{color:'#9296A4', marginTop:'20px'}}>
                    <p>Full Oil Change  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    <p>European Car Change  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    <p>Extra Heavy Duty Diesel  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    <p>Oil & Filter  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    <p>Royal Purple Oil  <span  style={{color:'#2D72FE'}}>$25</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCatelog;