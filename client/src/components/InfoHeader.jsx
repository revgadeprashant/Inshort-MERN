
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        background: '#f44336',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        height: 48,
        marginBottom: 30,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    logo: {
        height: 34,
        '&:last-child': {
            margin: '0 40px 0 0px'
        }
    },
    text: {
        fontSize: 14,
        fontWeight: 300,
        marginLeft: 50,
        fontFamily: "'Roboto',sans-serif",
    }
}))

const InfoHeader = () => {
    const classes = useStyles();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>
                For the best experience use <b>inshorts</b> app on your smartphone
            </Typography>
            <Box style={{ marginLeft: 'auto' }}>
                <a href="">
                    <img src={appleStore} alt="apple store" className={classes.logo} /></a>
                <a href="">
                    <img src={googleStore} alt="google store" className={classes.logo} />
                </a>
            </Box>
        </Box>
    )
}

export default InfoHeader;