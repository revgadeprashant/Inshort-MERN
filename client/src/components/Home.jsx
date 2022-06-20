import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Header from './Header';
import InfoHeader from './InfoHeader';
import Articles from './Articles';
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
const Home = () => {
    const classes = useStyles();
    return (

        <div>
            <Header />
            <Box>
                <Box className={classes.container}>
                    <InfoHeader />
                    <Articles />
                </Box>
            </Box>
        </div>
    )
}

export default Home