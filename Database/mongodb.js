import mongoose from 'mongoose';
import { DB_URI, NODE_ENV} from "../config/env.js";

if(!DB_URI){
    throw new Error("Please define the MongoDB URI environment variable inside .env.<development/production.local");
}

const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log(`MongoDB Connected in ${NODE_ENV} mode `);
    }
    catch(error){
        console.error('Error connecting to Database ', error);

        process.exit(1);
    }
}

export default connectToDB;