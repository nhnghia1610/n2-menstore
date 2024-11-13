import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
  clerkId: String,
  wishlist: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const UserDetails = mongoose.models.UserDetails || mongoose.model("UserDetails", userDetailsSchema);

export default UserDetails;