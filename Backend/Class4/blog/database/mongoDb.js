import mongoose from "mongoose"

const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
             'mongodb+srv://engineerchirag021:tdGAEbx6Qk3Uj0xC@cluster0.udbdzze.mongodb.net/learnwithchirag?retryWrites=true&w=majority'
        )
        if (connection) {
            console.log(`Connected to database: ${connection.host}`);
        }
    } catch(e) {
        console.log('Error connecting');
    }
}

export default connectToDB;