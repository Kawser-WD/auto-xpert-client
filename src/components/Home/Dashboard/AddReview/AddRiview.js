import { useEffect, useState } from 'react';
import CustomerReviews from '../../CustomerReviews/CustomerReviews';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const AddRiview = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('https://fast-tundra-26800.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div className="container"  style={{marginTop:'80px', marginBottom:'80px'}}  >
            <div className="d-flex justify-content-center">
            <h1  style={{fontWeight:'bold', color:'#5B618A'}} >Our Customer Reviews</h1>
            </div>
            <Swiper  
            slidesPerView={2}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
               {
                   reviews.map(review =>{
                   return <SwiperSlide>
                        <div className='d-flex justify-content-center'  style={{height:'400px',marginTop:'30px'}}>
                        <div className="card text-center"  style={{height:'350px', width:'18rem'}}>
                        <div className="d-flex justify-content-center">
                            <img className="rounded-circle " style={{height:'100px',width:'100px', marginTop:'30px'}} src={review.imageURL} data-holder-rendered="true"/>
                            </div>
                        <div class="card-body">
                            <h5 class="card-title">{review.name}</h5>
                            <p class="card-text">{review.description}</p>
                        </div>
                        </div>
                        </div>
                    </SwiperSlide>
                   })
               }
            </Swiper>
        </div>
    );
};

export default AddRiview;