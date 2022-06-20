import Mongoose from "mongoose";


const Connection = async() => {

    try {
        const url = `mongodb+srv://inshorts:inshorts@inshorts.qqap1.mongodb.net/INSHORTS?retryWrites=true&w=majority`;

        await Mongoose.connect(url, { useNewUrlParser: true });
        console.log(`Database connected successfully`)

    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }

}

export default Connection;