import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected ${con.connection.host}`.cyan.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold)
        process.exit(1)
    }
}

export default connectDB
