import mongoose from "mongoose"

const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
             process.env.mongo_db_url
        )
        if (connection) {
            console.log(`Connected to database: ${connection.host}`);
        }
    } catch(e) {
        console.log('Error connecting');
    }
}

export default connectToDB;