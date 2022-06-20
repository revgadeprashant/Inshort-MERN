import React from 'react'
// import './Logout.css';
import { useDispatch } from 'react-redux'
import { logout, selectUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
 
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());   
    }
    return (
        <>
            <div className='logout'>
            <form className='login_form' onSubmit={(e) => handleLogout(e)}>
             
                <button type="submit" className='logout_button'
                 
                    >Log Out</button>
                <Link to='/signin'>Already have Account? login</Link>
            </form>

                
            </div>
        </>
    )
}
export default Logout;