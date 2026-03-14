import mongoose, { Schema, model, models } from "mongoose";

const InstituteSchema = new Schema({
  instituteName: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  }
});

const Institute = models.Institute || model("Institute", InstituteSchema);

export default Institute;