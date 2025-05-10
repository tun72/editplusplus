import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },

  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 1,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;