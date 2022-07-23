import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidbar/Sidebar';
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data =>{
        const serviceData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url =`https://fast-tundra-26800.herokuapp.com/addService`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response'))
        
    }
    const handleImageUpload = event=>{
        console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '73d7a3c02652ee43e13157d582a37762');
    imageData.append('image', event.target.files[0])  

    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
      .then(function (response) {
       setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
             <div className="col-md-10 p-4 pr-5 " style={{ position: "absolute", right: 0,  marginTop:'80px' }}>
             <div className="d-flex justify-content-center">
             <form onSubmit={handleSubmit(onSubmit)}>
                <label>Service Name</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} {...register("name")} />
                <br/><br/>
                <label>Service Coast</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} {...register("price", { required: true })} />
                <br/><br/>
                <input type="file" {...register("image")} onChange={handleImageUpload} />
                <br/><br/>
            <input type="submit" />
    </form>
        </div>
             </div>
        </div>
    );
};

export default AddService;