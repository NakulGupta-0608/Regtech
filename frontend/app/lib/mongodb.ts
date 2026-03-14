import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://nakulgupta868_db_user:PrK33Gvbue45vDnW@cluster0.fjuocqe.mongodb.net/?appName=Cluster0";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}