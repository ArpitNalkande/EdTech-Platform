// Remove the duplicate import statement for 'db'
import { db as prismaDb } from "./../../../lib/db";
import Mux from "@mux/mux-node";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// Use 'prismaDb' as an alias for the imported 'db'
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("unauth", { status: 401 });
    }
    const course = await prismaDb.course.create({
      data: {
        userId,
        title,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
