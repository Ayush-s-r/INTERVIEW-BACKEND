import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
<<<<<<< HEAD
    enum:["student","campany"],
=======
    enum:["student","company"],
>>>>>>> 348db9f1a68db3ea9c8b980366ebd2af95e4f699
    default:"student"
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
