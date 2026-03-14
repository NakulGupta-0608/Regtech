import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://admin:<admin123>@edusafe.jpn4gss.mongodb.net/?appName=EduSafe";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}