import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import AddRiview from '../Dashboard/AddReview/AddRiview';
import Reviews from '../Dashboard/Reviews/Reviews';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ServiceCatelog from '../ServiceCatelog/ServiceCatelog';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header></Header>
            <AboutCompany></AboutCompany>
            <ServiceCatelog/>
            <Footer></Footer>
        </div>
    );
};

export default Home;