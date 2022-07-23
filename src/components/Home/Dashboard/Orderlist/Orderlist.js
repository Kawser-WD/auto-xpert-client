import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useFirebase';
import Sidebar from '../Sidbar/Sidebar';

const Orderlist = () => {
    const { user } = useAuth();
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch(`https://fast-tundra-26800.herokuapp.com/order?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[user.email])
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{marginTop:'100px', position: "absolute", right: 0}}>
            <h1 className="d-flex justify-content-center">Your Order List</h1>
            <div>
            {/* {
                    orders.map(order=> <table class="table">
                    
                    <tbody>
                        <tr>
                        <th scope="row"></th>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.payment ?
                                    'Paid' :
                                    <Link to={`/payment/${order._id}`}><button>Pay</button></Link>
                                }
                        </td>
                        </tr>
                    </tbody>
                    </table>)
            } */}
            <table className="table table-borderless table-hover">
                <thead className='table-light'>
                      <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                </thead>
            <tbody>
            {
                orders.map((order, key)=>{
                    return(
                        <tr key={key}>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.payment ?
                                    'Paid' :
                                    <Link to={`/payment/${order._id}`}><button className='btn' style={{backgroundColor:'#30336b', color:'#fff'}}>Pay</button></Link>
                                }
                        </td>
                        </tr>
                    )
                })
             }
            </tbody>
            </table>
            </div>
            </div>
        </div>
    );
};

export default Orderlist;