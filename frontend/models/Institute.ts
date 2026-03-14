import mongoose from "mongoose";

const InstituteSchema = new mongoose.Schema({
  instituteName: String,
  ownerName: String,
  address: String,
  capacity: Number,
});

export default mongoose.models.Institute ||
  mongoose.model("Institute", InstituteSchema);