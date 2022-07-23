import React from 'react';
const Footer = () => {
    return (
        <footer style={{ backgroundColor:'#1F275F'}}>
            <div className="row"  style={{paddingTop:'20px'}}>
                <div className="col-md-3 col-sm-4 offset-md-1" style={{fontWeight:'normal', color:'#9095B1'}}>
                    <h5 style={{color:'#fff', fontWeight:'bold'}}>OUR SERVICES</h5>
                    <br/>
                    <li>Car Oil Change</li>
                    <li>Purchase Inspection</li>
                    <li>Auto Diagnostics</li>
                    <li>Battery Problems</li>
                    <li>Engine Repair</li>
                </div>
                <div className="col-md-4 col-sm-4" style={{fontWeight:'normal', color:'#9095B1'}}>
                   <h5 style={{color:'#fff', fontWeight:'bold'}}>ABOUT COMPANY</h5>
                   <br/>
                    <li>About Cardan</li>
                    <li>Fleet Maintenance</li>
                    <li>Get a Career</li>
                    <li>Service Areas</li>
                    <li>Free Estimates</li> 
                </div>
                <div className="col-md-4 col-sm-4" style={{fontWeight:'normal', color:'#9095B1'}}>
                    <h5 style={{color:'#fff', fontWeight:'bold'}}>GET IN TOUCH</h5>
                    <p>For Repair Support</p>
                    <p>+1 (810) 799 4660 / 5660</p>
                    <p>The Working Hours</p>
                    <p>Mon - Sat 9am to 7pm</p>
                    <p>Send Us Email</p>
                    <p>repair@my-domain.com</p>
                </div>
            </div>
            <br/>
            <hr/>
            <div className=" d-flex justify-content-center" style={{fontWeight:'normal', color:'#9095B1'}}>
            <h6>(c) 2021 KAWSER - Auto Repair Services. All rights reserved.</h6>
            </div>
        </footer>
    );
};

export default Footer;