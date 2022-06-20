
import { AppBar, Toolbar, makeStyles, Box, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Logout from './Logout';
import { logout } from '../redux/userSlice';

const useStyles = makeStyles({
    header: {
        background: '#fff',
        height: 70
    },
    menu: {
        color: '#000'
    },
    login: {
        color: 'black',
        marginRight: '15px'
    },
    image: {
        height: 55,
        margin: 'auto',
        paddingRight: 70
    }
})



const Header = () => {
    const user = useSelector((state) => state.user.currentUser);
    // console.log(user.userLogIn)
    const dispatch = useDispatch();
    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }


    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Menu className={classes.menu} />
                <img src={url} alt="logo" className={classes.image} />
                {user ?
                    <><Typography className={classes.login}>{user.userLogIn.name}</Typography><Typography className={classes.login} style={{ paddingLeft: '10px' }} onClick={(e) => handleLogout(e)}> LOGOUT</Typography></>
                    :
                    <Link to="/signin"
                        className={classes.login} style={{ textDecoration: 'none',  }}> LOGIN
                    </Link>}
                {/* {user?<>{user} <Logout/></>: <Link to='/signin'><Typography className={classes.login}>LOGIN</Typography>  </Link> }         */}
            </Toolbar>

            {/* <Typography>LOGIN</Typography> */}
        </AppBar>
    )
}

export default Header;