import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../../../hooks/useFirebase';
import Sidebar from '../Sidbar/Sidebar';

const Order = () => {
    const {name} = useParams();
    const { user } = useAuth();
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const [services,setServices] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('https://fast-tundra-26800.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    const result =  services.filter(service=> service.name == name)
    const price = result.map(product => product.price)
    const onSubmit = data => {
        const orderData = {
            name,
            price,
            email:user.email
        };
    // const products = { email:user.email, price:info, name:name}
        fetch('https://fast-tundra-26800.herokuapp.com/orderService', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(res=> res.json())
        .then(result =>{
            if(result){
                alert('order placed successfully');
              navigate('/orderlist')
            }
        })
    }
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{marginTop:'150px', position: "absolute", right: 0 }}>

            <div className="d-flex justify-content-center">

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Service Name</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} defaultValue={name} {...register("name")} />
                <br/><br/>
                <label>User Email</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} defaultValue={user.email} {...register("email")} />
                <br/><br/>
                <label>Service Coast</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} defaultValue={price} {...register("price")} />
                <br/><br/>
                <br/>
                <input type="submit" className='btn' style={{backgroundColor:'#30336b', color:'#fff'}} />
            </form>
        </div>
        </div>
        </div>
    );
};

export default Order;