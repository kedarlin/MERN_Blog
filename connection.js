import mongoose from "mongoose";


export default async () => {
    try {
      console.log(process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to DB successfully');
    } catch (err) {
      console.log('Error on establishing the DB connection: ', err.message);
    }
  };