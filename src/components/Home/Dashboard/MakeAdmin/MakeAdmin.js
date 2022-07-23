import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import Sidebar from '../Sidbar/Sidebar';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fast-tundra-26800.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{marginTop:'100px', position: "absolute", right: 0 }}>
                <h3>Make Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <input
                    style={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <br/>
                    <br/>
                <button type="submit" className="btn" style={{backgroundColor:'#30336b', color:'#fff'}} variant="contained">Make Admin</button>
            </form>
            {success && toast.success('Admin added successfully') }
            </div>
        </div>
    );
};

export default MakeAdmin;