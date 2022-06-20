import logo from './logo.svg';
import './App.css';
import { Box, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//components
// import Header from './components/Header';
// import InfoHeader from './components/InfoHeader';
// import Articles from './components/Articles';
import Home from './components/Home';
import Signup from './components/Signup';
import LogIn from './components/LogIn';
import Logout from './components/Logout';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 110,
    width: '59%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  }
}))

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const classes = useStyles();

  return (
    <BrowserRouter>
     <Route exact path='/' component={Home} /> 
        {/* <Box>
          <Box className={classes.container}>
            <InfoHeader />
            <Articles />
          </Box>
        </Box> */}
        <Switch>
        <Route  path="/signin">
          {user ? <Redirect to="/" /> : <LogIn />}
          </Route>
        <Route path="/signup">
          {user ? <Redirect to="/" /> : <Signup />}
        </Route>
      </Switch>
     {/* <Route exact path='/signup' component={Signup}/> */}
    </BrowserRouter >
  );

}

export default App;