// frontend/app/api/institute/route.ts

import { connectDB } from "../../../lib/mongodb";
import Institute from "../../../models/Institute";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const institute = new Institute(body);
    await institute.save();

    return Response.json(
      { success: true, message: "Institute Registered Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/institute error:", error);

    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// ↑↑↑ NO export default anywhere in this file ↑↑↑