import Mongoose from 'mongoose';

const newsSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});

const news = Mongoose.model('news', newsSchema);

export default news;