import React, { useState } from 'react'
// import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { usersignup } from '../service/api';

import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    login_form: {
        display: 'flex',
        flexDirection: 'column',
    },
    login_formh1: {
        fontSize: '35px',
        marginBottom: '15px',
        paddingBottom: '10px',
        letterSpacing: '1px',
    }, login_forminput: {
        minWidth: '380px',
        padding: '20px 0',
        paddingLeft: '15px',
        marginBottom: '10px',
        outline: 'none',
        border: '1px solid rgba(0, 0, 0, 0.24)',
        borderRadius: '2px',
        fontSize: '15px',
    },
    login_button: {
        padding: '17px 30px',
        marginTop: '10px',
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
        fontSize: '14px',
        borderRadius: '3px',
    }

})

const Signup = () => {
    const classes = useStyle();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    // const history = useHistory();
    const user={name,email,password,cpassword};     
   

    const handleSubmit = async () => {
        await usersignup(user)
        // history.push('/signin')
    }

    return (
        <div className={classes.login}>
            <form className={classes.login_form} onSubmit={(e) => handleSubmit()} >
                <h1 className={classes.login_formh1}>Register</h1>
                <input className={classes.login_forminput} type="text" placeholder='your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className={classes.login_forminput} type="text" name="" id="" placeholder='your email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input className={classes.login_forminput} type="password" name="" id="" placeholder='your password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <input className={classes.login_forminput} type="password" name="" id="" placeholder='confirm password' value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)} />
                <button type="submit" className={classes.login_button} >Register</button>
            </form>
            <Link to='/signin'>Already have account? Sign in here</Link>
        </div>
    )
}

export default Signup