import express from 'express';

import { getNews } from '../controller/news-controller.js';
import { userSignin, userSignup } from '../controller/user-controller.js';

const route = express.Router();


route.get('/news', getNews);
route.post('/signup', userSignup);
route.post('/signin', userSignin);


export default route;