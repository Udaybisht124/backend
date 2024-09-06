const { mongoose } = require("mongoose");
require('dotenv').config();

async function connectDB(){
    // const URL = `mongodb+srv://`+`${process.env.MONGO_USER}`+`:`+`${process.env.MONGO_PSWD}`+`@cluster0.vyhirpv.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`
    // const connect = await mongoose.connect(URL);
    const connect = await mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true})
    if (!connect) {
        console.log("Not Connected DB")
    }
    else{
        console.log("Connected DB");
    }
}


module.exports = connectDB;