import React, { useState } from 'react'
// import './Login.css';
import { useDispatch,useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginacc } from '../redux/apiCalls';

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

const Login = () => {
    const classes = useStyle();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const history=useHistory();
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginacc(dispatch,{
            email:email,
            password:password,
        } );
        // history.push('/')
    }
   
    return (
        <div className={classes.login}>
        <form className={classes.login_form} onSubmit={(e) => handleSubmit(e)} disabled={isFetching}>
            <h1 className={classes.login_formh1}>Login Here</h1>
            <input className={classes.login_forminput} type="text" name="" id="" placeholder='your email' value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input className={classes.login_forminput} type="password" name="" id="" placeholder='your password' value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className={classes.login_button} >LogIn</button>
            {error ? <></> : <p style={{ color: 'red' }}>Something went wrong...</p>}
        </form>
        <Link to='/signup'>Create New Account</Link>
    </div>
    )
}

export default Login