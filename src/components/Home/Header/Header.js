import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import AddRiview from '../Dashboard/AddReview/AddRiview';
import AddServices from '../Dashboard/AddServices/AddServices';
import Reviews from '../Dashboard/Reviews/Reviews';
import HeaderMain from '../HeaderMain/HeaderMain';
import ServiceCatelog from '../ServiceCatelog/ServiceCatelog';

const Header = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <AddServices></AddServices>
            <AddRiview></AddRiview>
        </div>
    );
};

export default Header;