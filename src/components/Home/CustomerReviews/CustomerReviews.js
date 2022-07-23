import React from 'react';
const CustomerReviews = (props) => {
    const {name,imageURL,description} = props.review
    return (
        <div className="col-md-6" style={{height:'400px',marginTop:'30px'}}>
                <div className="card">
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <div className="profile">
                    <img className="rounded-circle" style={{height:'100px',width:'100px'}} src={imageURL} data-holder-rendered="true"/>
                    <h4 className="name d-inline" style={{paddingLeft:'30px'}}>{name}</h4>
                    </div>
                </div>
                </div>
                </div>
    );
};

export default CustomerReviews;