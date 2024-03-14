import { Schema, model } from 'mongoose';

// mongoose schema for user 
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return v === this.password;
      },
      message: props => `${props.value} does not match the password`
    }
  }
}, { timestamps: true });

// Middleware to validate user data before saving in the Mongoose DB
userSchema.pre('save', async function(next) {
  try {
    // Password confirmation will be validated by Mongoose
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

userSchema.method.toJSON = function () {
  const { __v, ...object } = this.toObject();
  return object;
};

// Exporting Mongoose model
const User = model('User', userSchema);

export default User;
