import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const userSchema = new Schema ({
const userSchema = new Schema({
    firstName: {
        type : String,
        required : 'enter first name '
    },
    lastname :{
        tpye : String,
        required : 'enter the last name'
    },
    email: {
        type: String,
    },
    company: {
        type : String,
    },
    phone:{
        type : Number,
    },
    cretaed_date: {
        type :  Date,
        default : Date.now
    }
    });
    

})