import mongoose from "mongoose";

const { Schema, model } = mongoose;


const UserShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: false,
  },
});

 const UserModel = model('user', UserShema);

 export default UserModel