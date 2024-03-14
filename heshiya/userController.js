import mongoose from 'mongoose';
import { userSchema} from '../models/userModel';
const user  = mongoose.model('user',userSchema );

export const addNewUser = (req, res) => {
    let newUser = new user(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    }); 
};
export const getUser = (req, res) => {
    user.find( {} , (err, user) => {
        iff(err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const getUserId = (req, res) => {
    user.findById(req.params.userId, (err,contact) => {
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
};

